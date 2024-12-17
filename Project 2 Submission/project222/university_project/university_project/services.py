# services.py
from .repository import JsonDatabase

class StudentService:
    def __init__(self):
        self.db = JsonDatabase('db')

    def create_student(self, student):
        self.db.add_student(student)

    def get_students(self):
        return self.db.get_students()

    # Similar methods for update and delete

    def update_student(self, student):
        return self.db.update_student(vars(student))

    def delete_student(self, student_id):
        return self.db.delete_student(student_id)

class ClassService:
    def __init__(self):
        self.db = JsonDatabase('db')

    def create_class(self, _class):
        self.db.add_class(_class)

    def get_classes(self):
        return self.db.get_classes()

    # Similar methods for update and delete
class CourseService:
    def __init__(self):
        self.db = JsonDatabase('db')

    def create_course(self, course):
        self.db.add_course(course)

    def get_courses(self):
        return self.db.get_courses()
    
class EnrollmentService:
    def __init__(self):
        self.db = JsonDatabase('db')


    def register_student_in_course(self, student_id, course_id):
        enrollment_data = self.db.get_enrollment()
        print(enrollment_data)
        # Your logic to update the enrollment data
        if course_id in enrollment_data:
            enrollment_data[course_id].append(student_id)
        else:
            enrollment_data[course_id] = [student_id]

        # Pass the updated enrollment_data directly to the repository
        self.db.update_enrollment(enrollment_data)
    def get_enrollment(self):
        return self.db.get_enrollment() or {}
    
    def get_enrollment_for_course(self, courseid):
        enrollment_data = self.db.get_enrollment() or {}
        # print(enrollment_data.get(courseid, {}))
    # Directly return the enrollment data for the specified course ID
        return enrollment_data.get(str(courseid), {})
    
    
class LogService:
    def __init__(self):
        self.db = JsonDatabase('db')


    def get_logs(self):
        return self.db.get_logs() or {}