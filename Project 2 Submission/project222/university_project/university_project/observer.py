import json
import datetime
import os

class DatabaseObserver:
    def __init__(self, log_file_path='db/log.json'):
        self.log_file_path = log_file_path

    def log_operation(self, method_name, data):
        timestamp = str(datetime.datetime.now())
        log_entry = {'timestamp': timestamp, 'method': method_name, 'data': data}
        
        existing_logs = []
        if os.path.exists(self.log_file_path) and os.path.getsize(self.log_file_path) > 0:
            try:
                with open(self.log_file_path, 'r') as existing_log_file:
                    existing_logs = json.load(existing_log_file)
            except json.decoder.JSONDecodeError:
                # Handle the case where the existing log file is not a valid JSON
                print("Warning: Existing log file is not in a valid JSON format.")
                existing_logs = []

        existing_logs.append(log_entry)

        with open(self.log_file_path, 'w') as log_file:
            json.dump(existing_logs, log_file, indent=2)
            log_file.write('\n')
