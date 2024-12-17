from .models import Course
from .services import CourseService
from .factory import FactoryInterface

class CourseFactory(FactoryInterface):
    @classmethod
    def create(cls, course_name, course_id=None):
        if course_id is None:
            last_course_id = cls.get_last_id_from_service()
            course_id = last_course_id + 1

        course = Course(course_id, course_name)
        return course

    @staticmethod
    def get_last_id_from_service():
        try:
            course_service = CourseService()
            courses = course_service.get_courses()
            if courses:
                last_course_id = max(int(course['course_id']) for course in courses)
                return last_course_id
        except Exception as e:
            print(f"Error: {e}")

        return 110  # Default starting ID
