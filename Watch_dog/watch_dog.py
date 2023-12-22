import hug
import os
import signal
import threading
import time

# import  as inference

PATH = r"Watched_folder/"

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
            # print_record(vars(record))

    event_handler = MyHandler()
    observer = Observer()
    observer.schedule(event_handler, PATH, recursive=True)
    observer.start()
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()

class NewRecord():
    def __init__(self, file_name) -> None:
        self.audio = f"/records/{file_name}"
        self.spectrogram = "/spectrograms/TODO" #TODO
        self.turbineId, self.date, self.name = self._process_new_file(file_name)
        self.spiecesId = 3 #TODO inference(self.audio_path)
        self.verification = 1
        self.turbineStopSignal = 1
        self.bat = 1

    def _process_new_file(self, file_name):
        # file name is created in form: turbineId_date_time_idRecord
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

def start_server_with_watchdog():
    watch_thread = threading.Thread(target=watch_directory)
    watch_thread.start()
    __hug__.http.serve(port=3900)

@hug.post('/api/records')
def create_record(output_json: hug.types.json):
    print("Record sent successfully!", output_json)
    return output_json, hug.HTTP_200

# @hug.get('/api/records')
# def print_record(output_json: hug.types.json):
#     print("Record printed successfully!")
#     return output_json, hug.HTTP_OK

if __name__ == '__main__':
    start_server_with_watchdog()