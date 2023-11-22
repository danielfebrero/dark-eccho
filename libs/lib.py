import os
import psutil
import numpy as np
import matplotlib.pyplot as plt
import time
import re
from datetime import datetime
from sqlalchemy import create_engine
from sqlalchemy.exc import SQLAlchemyError
import shutil
import gzip
import subprocess
import threading

class DatabaseManager:
    def __init__(self, connection_string):
        self.engine = create_engine(connection_string)

    def execute_query(self, query):
        try:
            with self.engine.connect() as connection:
                start_time = time.time()
                result = connection.execute(query)
                end_time = time.time()
                return result, end_time - start_time
        except SQLAlchemyError as e:
            return None, str(e)

    def get_query_performance(self, query):
        _, execution_time = self.execute_query(query)
        return execution_time

    def check_connection(self):
        try:
            with self.engine.connect() as connection:
                return True
        except SQLAlchemyError:
            return False

class SecurityMonitor:
    def __init__(self, log_file_path):
        self.log_file_path = log_file_path

    def detect_unauthorized_access(self):
        with open(self.log_file_path, 'r') as file:
            for line in file:
                if self.is_suspicious(line):
                    print(f"Suspicious activity detected: {line.strip()}")

    def is_suspicious(self, log_entry):
        if "failed login" in log_entry.lower():
            return True
        return False

class UserActivityTracker:
    @staticmethod
    def log_activity(user_name, activity):
        timestamp = datetime.now()
        log_entry = f"{timestamp} - {user_name}: {activity}\n"
        with open("user_activity_log.txt", "a") as file:
            file.write(log_entry)

    @staticmethod
    def get_last_activity():
        try:
            with open("user_activity_log.txt", "r") as file:
                lines = file.readlines()
                return lines[-1].strip() if lines else None
        except FileNotFoundError:
            return None

class ResourceAlerts:
    def __init__(self, cpu_threshold=75, memory_threshold=75, disk_threshold=75):
        self.cpu_threshold = cpu_threshold
        self.memory_threshold = memory_threshold
        self.disk_threshold = disk_threshold

    def check_and_alert(self):
        self.check_cpu_usage()
        self.check_memory_usage()
        self.check_disk_usage()

    def check_cpu_usage(self):
        cpu_usage = psutil.cpu_percent()
        if cpu_usage > self.cpu_threshold:
            print(f"Warning: CPU usage is high at {cpu_usage}%")

    def check_memory_usage(self):
        memory_usage = psutil.virtual_memory().percent
        if memory_usage > self.memory_threshold:
            print(f"Warning: Memory usage is high at {memory_usage}%")

    def check_disk_usage(self):
        disk_usage = psutil.disk_usage('/').percent
        if disk_usage > self.disk_threshold:
            print(f"Warning: Disk usage is high at {disk_usage}%")

class SignalHandler:
    @staticmethod
    def delayed_handling():
        print("Début du traitement différé...")
        time.sleep(10)
        print("Traitement différé terminé.")

    @staticmethod
    def sigterm_handler(signum, frame):
        print("SIGTERM reçu, lancement du traitement différé.")
        thread = threading.Thread(target=SignalHandler.delayed_handling)
        thread.start()

    @staticmethod
    def run_increment_process(file_path, duration):
        with open(file_path, 'w') as file:
            file.write("0")
        end_time = time.time() + duration
        while time.time() < end_time:
            SignalHandler.increment_counter(file_path)
            time.sleep(1)

    @staticmethod
    def increment_counter(file_path):
        try:
            with open(file_path, 'r+') as file:
                current_value = int(file.read())
                file.seek(0)
                file.write(str(current_value + 1))
                file.truncate()
        except Exception as e:
            print(f"Error occurred: {e}")

class NetworkUtilities:
    @staticmethod
    def show_active_connections():
        connections = psutil.net_connections(kind='inet')
        for conn in connections:
            print(f"Local Address: {conn.laddr}, Remote Address: {conn.raddr}, Status: {conn.status}")

class ProcessControl:
    @staticmethod
    def detach_process():
        if os.fork() != 0:
            os._exit(0)
        os.setsid()

    def start_process(self, command):
        try:
            subprocess.Popen(command, shell=True)
            return "Process started successfully."
        except Exception as e:
            return f"Error starting process: {e}"

    def stop_process(self, process_name):
        for proc in psutil.process_iter():
            if process_name in proc.name():
                proc.kill()
                return f"Process {process_name} stopped."
        return f"No process named {process_name} found."

    def restart_process(self, process_name, command):
        stop_message = self.stop_process(process_name)
        start_message = self.start_process(command)
        return f"{stop_message} Then, {start_message}"

    def is_process_running(self, process_name):
        for proc in psutil.process_iter():
            if process_name in proc.name():
                return True
        return False

class LogManager:
    def __init__(self, log_directory):
        self.log_directory = log_directory

    def read_logs(self, file_name):
        with open(os.path.join(self.log_directory, file_name), 'r') as file:
            return file.readlines()

    def filter_logs(self, file_name, keyword):
        logs = self.read_logs(file_name)
        return [log for log in logs if keyword in log]

    def archive_logs(self, file_name):
        file_path = os.path.join(self.log_directory, file_name)
        archive_path = f"{file_path}-{datetime.now().strftime('%Y%m%d%H%M%S')}.gz"
        with open(file_path, 'rb') as f_in:
            with gzip.open(archive_path, 'wb') as f_out:
                shutil.copyfileobj(f_in, f_out)
        os.remove(file_path)
        return archive_path
