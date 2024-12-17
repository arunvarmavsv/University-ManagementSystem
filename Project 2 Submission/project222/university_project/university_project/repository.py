# repository.py
import json
import os
from .observer import DatabaseObserver

class Singleton:
    _instances = {}

    def __new__(cls, *args, **kwargs):
        if cls not in cls._instances:
            instance = super().__new__(cls)
            instance.observer = DatabaseObserver()
            cls._instances[cls] = instance
        return cls._instances[cls]

class JsonDatabase(Singleton):
    def __init__(self, db_path):
        self.db_path = db_path
        if not os.path.exists(self.db_path):
            os.makedirs(self.db_path)
        
        # Flag to check if we are in the process of notifying the observer
        self.notifying_observer = False

    def _notify_observer(self, method_name, data):
        # Check if we are not already notifying the observer
        if not self.notifying_observer:
            self.notifying_observer = True
            try:
                self.observer.log_operation(method_name, data)
            finally:
                self.notifying_observer = False

    def __getattribute__(self, name):
        # Intercept all method calls
        if name != "_notify_observer" and name != "_write_json" and name != "_read_json" and name in JsonDatabase.__dict__ and callable(JsonDatabase.__dict__[name]):
            def wrapper(*args, **kwargs):
                result = object.__getattribute__(self, name)(*args, **kwargs)
                self._notify_observer(name, kwargs)
                return result
            return wrapper
        return object.__getattribute__(self, name)

    def _read_json(self, filename):
        file_path = os.path.join(self.db_path, filename)
        if os.path.exists(file_path):
            with open(file_path, 'r') as file:
                data = json.load(file)
                return data
        return []

    def _write_json(self, filename, data):
        file_path = os.path.join(self.db_path, filename)
        with open(file_path, 'w') as file:
            json.dump(data, file, indent=2)

    def get_students(self):
        return self._read_json('students.json')

    def add_student(self, student):
        students = self.get_students()
        students.append(vars(student))
        self._write_json('students.json', students)

    def get_classes(self):
        return self._read_json('classes.json')

    def add_class(self, _class):
        classes = self.get_classes()
        classes.append(vars(_class))
        self._write_json('classes.json', classes)

    def update_student(self, student):
        students = self.get_students()
        for idx, existing_student in enumerate(students):
            if str(existing_student['student_id']) == str(student['student_id']):
                students[idx] = student
                self._write_json('students.json', students)
                break

    def delete_student(self, student_id):
        students = self.get_students()
        updated_students = [student for student in students if str(student['student_id']) != str(student_id)]
        self._write_json('students.json', updated_students)

    def add_course(self, course):
        courses = self.get_courses()
        courses.append(vars(course))
        self._write_json('courses.json', courses)

    def get_courses(self):
        return self._read_json('courses.json')

    def get_enrollment(self):
        return self._read_json('enrollment.json') or {}

    def update_enrollment(self, enrollment_data):
        self._write_json('enrollment.json', enrollment_data)
    
    def get_logs(self):
            return self._read_json('log.json')
        
