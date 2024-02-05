import os
from torch.utils.data import Dataset
import pandas as pd
import torch
import torchaudio
import matplotlib.pyplot as plt


class BatsDataset(Dataset):
    
    def __init__(self, 
                 audio_path,
                 transformation, 
                 target_sample_rate,
                 num_samples,
                 device):
        self.audio_path = audio_path
        self.device = device
        self.transformation = transformation.to(self.device)
        self.target_sample_rate = target_sample_rate
        self.num_samples = num_samples   
    
    def __getitem__(self):
        signal, sr = torchaudio.load(self.audio_path)
        signal = signal.to(self.device)
        signal = self._resample_if_necessery(signal, sr)
        signal = self._cut_if_necessary(signal) 
        signal = self._mix_down_if_necessary(signal)
        signal = self.transformation(signal)
        return signal

    def _cut_if_necessary(self, signal):
        if signal.shape[1] > self.num_samples:
            signal = signal[:, :self.num_samples]
        return signal
    
    def _split(self, signal) -> tuple:
        fragments = torch.split(signal, 2*self.target_sample_rate, dim=1)
        return fragments

    def _right_pad_if_necessary(self, signal):
        length_signal = signal.shape[1]
        if length_signal < self.num_samples:
            num_missing_samples = self.num_samples - length_signal
            last_dim_padding = (0, num_missing_samples)
            signal = torch.nn.functional.pad(signal, last_dim_padding)
        return signal

    def _resample_if_necessery(self, signal, sr):
        if sr != self.target_sample_rate:
            resampler = torchaudio.transforms.Resample(sr, self.target_sample_rate)
            signal = resampler(signal)
        return signal

    def _mix_down_if_necessary(self, signal):
        if signal.shape[0] > 1:
            signal = torch.mean(signal, dim=0, keepdim=True)
        return signal
