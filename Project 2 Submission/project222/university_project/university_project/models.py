# models.py
class Student:
    def __init__(self, name, student_id, student_type):
        self.name = name
        self.student_id = student_id
        self.student_type = student_type


class Class:
    def __init__(self, class_id, class_name):
        self.class_id = class_id
        self.class_name = class_name


class Course:
    def __init__(self, course_id, course_name):
        self.course_id = course_id
        self.course_name = course_name
        


# models.py
class Enrollment:
    def __init__(self, data):
        self.data = data
    def to_dict(self):
        return {'data': self.data}