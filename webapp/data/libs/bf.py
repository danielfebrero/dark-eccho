# Preparing the Python brute-force script for the user to run locally

import itertools
import string
import zipfile
import json
import os

# Function to attempt to open the zip file with a given password
def try_password(zip_file, password):
    try:
        zip_file.extractall(pwd=password.encode())
        return True
    except:
        return False

# Path to the zip file
zip_file_path = '/mnt/data/test.zip'  # Replace with the actual path to your zip file
progress_file = '/mnt/data/brute_force_progress.json'

# Character set: All lowercase and uppercase letters, and digits
charset = string.ascii_letters + string.digits
max_length = 12  # Maximum password length

# Check if a previous progress file exists
if os.path.exists(progress_file):
    with open(progress_file, 'r') as progress:
        data = json.load(progress)
        start_length = data.get("length", 1)
else:
    start_length = 1

# Brute-force logic
with zipfile.ZipFile(zip_file_path, 'r') as zip_file:
    for length in range(start_length, max_length + 1):
        for guess in itertools.product(charset, repeat=length):
            guess_password = ''.join(guess)
            if try_password(zip_file, guess_password):
                # Save the found password and exit
                with open(progress_file, 'w') as progress:
                    json.dump({"found": True, "password": guess_password}, progress)
                print(f"Password found: {guess_password}")
                exit(0)
        # Save progress
        with open(progress_file, 'w') as progress:
            json.dump({"found": False, "length": length}, progress)

print("Password not found within the given constraints.")
