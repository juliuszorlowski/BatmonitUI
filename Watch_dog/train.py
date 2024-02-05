import torch
import torchaudio
from torch import nn
from torch.utils.data import DataLoader

from batsdatasetmock import BatsDataset
from cnn import CNNNetwork


BATCH_SIZE = 128
EPOCHS = 10
LEARNING_RATE = .001
ANNOTATIONS_FILE = r"Trening/Data/Metadata/Annotations_3.csv"
AUDIO_DIR = r"C:\Users\Jakub\Documents\PJATK\INZ\Nagrania_nietoperzy"
SPECTROGRAM_DIR = r"C:\Users\Jakub\Documents\PJATK\INZ\Batmonit_model\Chiro_sounds_signed\Spectrogram"
SAMPLE_RATE = 192000
NUM_SAMPLES = 192000
MODEL_PATH = "feedforwardnet.pth"


def create_data_loader(train_data, batch_size):
    train_dataloader = DataLoader(train_data, batch_size=batch_size)
    return train_dataloader


def train_single_epoch(model, data_loader, loss_fn, optimiser, device):
    for inputs, targets in data_loader:
        inputs, targets = inputs.to(device), targets.to(device)

        # calculate loss
        predictions = model(inputs)
        loss = loss_fn(predictions, targets)

        # backpropagate loss and update weights
        optimiser.zero_grad()
        loss.backward()
        optimiser.step()

    print(f"Loss: {loss.item()}")


def train(model, data_loader, loss_fn, optimiser, device, epochs):

    for i in range(epochs):
        print(f"Epoch {i+1}")
        print(data_loader)
        train_single_epoch(model, data_loader, loss_fn, optimiser, device)
        print("--------------------------")
    print("Training is done.")


if __name__ == "__main__":

    if torch.cuda.is_available():
        device = "cuda"
    else:
        device = "cpu"
    print(f"Using device: {device}")

    #instantiating our dataset object and create data loader
    spectrogram = torchaudio.transforms.Spectrogram(
        n_fft=1024,
        hop_length=1024,
    )

    bd = BatsDataset(ANNOTATIONS_FILE,
                            AUDIO_DIR,
                            SPECTROGRAM_DIR, 
                            spectrogram, 
                            SAMPLE_RATE,
                            NUM_SAMPLES,
                            device)

    # Create a data loader for the train set
    train_data_loader = create_data_loader(bd, batch_size=BATCH_SIZE)


    # construct model and assign it to device
    cnn = CNNNetwork().to(device)


    # instantiate loss function + optimser
    loss_fn = nn.CrossEntropyLoss()
    optimiser = torch.optim.Adam(cnn.parameters(), lr=LEARNING_RATE)

    # train model
    train(cnn, train_data_loader, loss_fn, optimiser, device, EPOCHS)

    # store the model in .pth format
    torch.save(cnn.state_dict(), MODEL_PATH)

    print("Model trained and stored at feedforwardnet.pth")