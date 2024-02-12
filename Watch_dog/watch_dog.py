import os
import time
import torch
import torchaudio
import requests
from cnn import CNNNetwork
from batsdataset import BatsDataset


PATH = r"../recordings/"
SAMPLE_RATE = 192000
NUM_SAMPLES = 192000

def pre_prediction(path_sound):
    cnn = CNNNetwork()
    state_dict = torch.load("Watch_dog/feedforwardnet.pth", map_location=torch.device('cpu'))
    cnn.load_state_dict(state_dict)

    #instantiating our dataset object and create data loader
    spectrogram = torchaudio.transforms.Spectrogram(
        n_fft=1024,
        hop_length=1024,
    )

    bd = BatsDataset(   path_sound,
                        spectrogram,
                        SAMPLE_RATE,
                        NUM_SAMPLES,
                        "cpu")

    input = bd[1]
    input.unsqueeze_(0)
    return cnn, input

def predict(path):
    model, input = pre_prediction(path)
    model.eval()
    with torch.no_grad():
        preditions = model(input)
        # Tensor (1, 10) -> [[0.1, 0.01, ..., 0.6]]
        predicted = preditions[0].argmax(0).item()
    return predicted

def watch_directory():
    from watchdog.events import FileSystemEventHandler
    from watchdog.observers import Observer

    class MyHandler(FileSystemEventHandler):
        def on_created(self, event):
            if event.is_directory:
                return
            file_name = os.path.basename(event.src_path)
            print(f'Utworzono plik: {file_name}')
            record = NewRecord(file_name)
            create_record(vars(record))

    event_handler = MyHandler()
    observer = Observer()
    observer.schedule(event_handler, PATH, recursive=True)
    observer.start()
    print("Watchdog is watching...")
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()

class NewRecord():
    def __init__(self, file_name) -> None:
        self.audio = f"../recordings/{file_name}"
        _, self.date, self.name = self._process_new_file(file_name)
        self.speciesId = predict(self.audio)
        self.verification = 1
        self.turbineStopSignal = 1
        self.bat = 1
        self.turbineId = 1
        self.spectrogram = "[PNG]"
        

    def _process_new_file(self, file_name):

        DATA = file_name.split("_")
        turbine_id = DATA[0]
        timestamp = self._create_timestamp(DATA[1], DATA[2])
        id_record = DATA[3][0:-4]
        return turbine_id, timestamp, id_record

    def _create_timestamp(self, date, time):
        timestamp = f"{date[0:4]}-{date[4:6]}-{date[6:8]} {time[0:2]}:{time[2:4]}:{time[4:6]}"
        return timestamp
    
    def convert_to_dict(self):
        return vars(self)    


def create_record(data):
    url = "http://localhost:3900/api/records"
    print(data)
    response = requests.post(url, json=data)

if __name__ == '__main__':
    watch_directory()