import torch
import torchvision.transforms as transforms
from torchvision.datasets import ImageFolder
from torch.utils.data import DataLoader
from torchvision import models
import torch.nn as nn
import torch.optim as optim
import os
import sys
import argparse

def train_model(start_epoch, total_epochs, model_path=None):
    # Load datasets
    transform = transforms.Compose([
        transforms.Resize((224, 224)),
        transforms.ToTensor(),
        transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
    ])
    train_data = ImageFolder('/mnt/data/classes/danny', transform=transform)
    train_loader = DataLoader(train_data, batch_size=4, shuffle=True)

    # Initialize model
    model = models.resnet18(pretrained=True)
    num_ftrs = model.fc.in_features
    model.fc = nn.Linear(num_ftrs, 2) # 2 classes: Danny and not-Danny

    # Load model state if a saved model is provided
    if model_path and os.path.exists(model_path):
        model.load_state_dict(torch.load(model_path))
        print("Loaded model state from:", model_path)

    criterion = nn.CrossEntropyLoss()
    optimizer = optim.SGD(model.parameters(), lr=0.001, momentum=0.9)

    # Train model
    for epoch in range(start_epoch, total_epochs):
        running_loss = 0.0
        for i, data in enumerate(train_loader, 0):
            inputs, labels = data
            optimizer.zero_grad()
            outputs = model(inputs)
            loss = criterion(outputs, labels)
            loss.backward()
            optimizer.step()
            running_loss += loss.item()
            if i % 10 == 9:
                print(f'[Epoch: {epoch + 1}, Batch: {i + 1}] Loss: {running_loss / 10:.3f}')
                running_loss = 0.0

        # Save model after each epoch
        save_path = f'/mnt/data/trained_model_epoch_{epoch + 1}.pth'
        torch.save(model.state_dict(), save_path)
        print(f'Model saved to {save_path}')

        # Exit after each epoch
        print(f'Completed epoch {epoch + 1}. Exiting for next epoch.')
        sys.exit(0)

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Train a model to classify Danny or not Danny.')
    parser.add_argument('--start_epoch', type=int, required=True, help='The start epoch number')
    parser.add_argument('--model_path', type=str, help='Path to the saved model')
    args = parser.parse_args()

    train_model(args.start_epoch, args.start_epoch + 1, args.model_path)
