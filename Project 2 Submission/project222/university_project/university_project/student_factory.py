from .models import Student
from .services import StudentService
from .factory import FactoryInterface
from .decorators import StudentDecorator

class StudentFactory(FactoryInterface):
    @classmethod
    def create(cls, name, student_type, id=None):
        decorated_student = StudentDecorator.create_decorated_student(name, student_type, id)
        return decorated_student

    @staticmethod
    def get_last_id_from_service():
        try:
            student_service = StudentService()
            students = student_service.get_students()
            if students:
                last_student_id = max(int(student['student_id']) for student in students)
                return last_student_id
        except Exception as e:
            print(f"Error: {e}")

        return 110  # Default starting ID
