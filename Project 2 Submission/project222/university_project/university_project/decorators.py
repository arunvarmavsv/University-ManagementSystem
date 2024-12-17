# decorators.py
from .models import Student  # Assuming you have a Student class defined
from .services import StudentService  # Assuming you have a StudentService class defined

class StudentDecorator:
    @classmethod
    def create_decorated_student(cls, name, student_type, student_id=None):
        if student_id is None:
            # Get the last student ID from the service if not provided
            last_student_id = cls.get_last_student_id_from_service()
            student_id = last_student_id + 1

        # Create a decorated student with name, ID, and type
        decorated_student = Student(name, int(student_id), student_type)

        return decorated_student

    @staticmethod
    def get_last_student_id_from_service():
        try:
            student_service = StudentService()
            students = student_service.get_students()

            if students:
                last_student_id = max(int(student['student_id']) for student in students)
                return last_student_id
        except Exception as e:
            # Handle exceptions, e.g., service errors, JSON decoding issues
            print(f"Error: {e}")

        # Return a default starting ID if unable to determine the last ID
        return 110  # Default starting ID
