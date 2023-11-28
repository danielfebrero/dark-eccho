import argparse
from PIL import Image
import numpy as np

def text_to_bits(text, encoding='utf-8', errors='surrogatepass'):
    bits = bin(int.from_bytes(text.encode(encoding, errors), 'big'))[2:]
    return bits.zfill(8 * ((len(bits) + 7) // 8))

def bits_to_text(bits, encoding='utf-8', errors='surrogatepass'):
    n = int(bits, 2)
    return n.to_bytes((n.bit_length() + 7) // 8, 'big').decode(encoding, errors)

def encode_image(text, image_size=(100, 100)):
    # Convert text to bits
    text_bits = text_to_bits(text)
    
    # Ensure the image is large enough to hold the text
    if len(text_bits) > image_size[0] * image_size[1]:
        raise ValueError("Text too long for the specified image size")

    # Create an image
    image = Image.new('RGB', image_size)
    pixels = image.load()

    # Iterate over the text bits
    for i in range(len(text_bits)):
        x = i % image_size[0]
        y = i // image_size[0]
        bit = text_bits[i]

        # Set the pixel value
        pixels[x, y] = (255, 255, 255) if bit == '1' else (0, 0, 0)

    # Fill the remaining pixels randomly to make the pattern less obvious
    for i in range(len(text_bits), image_size[0] * image_size[1]):
        x = i % image_size[0]
        y = i // image_size[0]
        pixels[x, y] = (np.random.randint(256), np.random.randint(256), np.random.randint(256))

    return image

def decode_image(image, text_length_bits):
    pixels = np.array(image)
    text_bits = ""

    # Iterate over the pixels
    for i in range(text_length_bits):
        x = i % image.size[0]
        y = i // image.size[0]
        r, g, b = pixels[y, x]

        # Assume that white pixels represent 1 and black pixels represent 0
        text_bits += '1' if r > 127 else '0'

    # Convert bits to text
    return bits_to_text(text_bits)

def main():
    parser = argparse.ArgumentParser(description="Steganography tool to hide and reveal text in images.")
    parser.add_argument('--in', type=str, help='Path to the text file to hide in the image.', dest='input')
    parser.add_argument('--out', type=str, help='Path to the image to reveal text from.', dest='output')
    
    args = parser.parse_args()

    if args.input:
        # Lire le contenu du fichier texte
        with open(args.input, 'r') as file:
            text_to_hide = file.read()

        # Choisir une taille d'image suffisante pour le texte
        image_size = (100, 110)
        encoded_image = encode_image(text_to_hide, image_size)
        encoded_image.save('hidden_text_image.png')
        print(f"Text from {args.input} has been hidden in 'hidden_text_image.png'.")

    if args.output:
        # Charger l'image encodée
        encoded_image_to_decode = Image.open(args.output)

        # Décoder le texte de l'image
        # Vous devrez savoir combien de caractères vous devez décoder
        text_length_bits = 135 * 8  # Exemple, cela doit être ajusté en fonction de la longueur du texte réel
        decoded_text_from_image = decode_image(encoded_image_to_decode, text_length_bits)
        with open('result.txt', 'w') as file:
            file.write(decoded_text_from_image)
        print(f"Text has been revealed from {args.output} and saved to 'result.txt'.")

if __name__ == '__main__':
    main()

## USAGE
# Hide text: python steganograph.py --in ./path-to-content.txt
# Reveal text: python steganograph.py --out ./path-to-image.png
