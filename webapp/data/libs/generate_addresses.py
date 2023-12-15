import random
import hashlib
import os
import json

def generate_keypair():
    private_key = random.getrandbits(256)
    public_key = hashlib.sha256(private_key.to_bytes(32, byteorder='big')).digest()
    address = hashlib.sha256(public_key).digest()[:20]
    return private_key, public_key, address

def is_interesting(address):
    """
    Check if the address contains the exact sequence 'danny'.
    """
    address_hex = address.hex()
    return "danny" in address_hex

def generate_and_write_interesting_keypairs_modified(file_base_path, max_lines=50000):
    file_count = 1
    file_path = f"{file_base_path}_{file_count}.json"
    line_count = 0

    while True:
        private_key, public_key, address = generate_keypair()

        if is_interesting(address):
            data = {
                "private_key": private_key,
                "public_key": public_key.hex(),
                "address": address.hex()
            }

            with open(file_path, 'a') as file:
                json.dump(data, file)
                file.write('\n')
            line_count += 1

            if line_count >= max_lines:
                file_count += 1
                file_path = f"{file_base_path}_{file_count}.json"
                line_count = 0

# Forking the process to run the script in background
file_base_path = '/mnt/data/danny_addresses'
pid = os.fork()
if pid == 0:  # Child process
    generate_and_write_interesting_keypairs_modified(file_base_path)
else:  # Parent process
    detached_process_id = pid

detached_process_id
