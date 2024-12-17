# # factory.py
# from .models import Student,Course,Enrollment
# from .services import StudentService,CourseService

# from .decorators import StudentDecorator

# class StudentFactory:
#     @classmethod
#     def create_student(cls, name, student_type,id=None):
#         # Use the StudentDecorator to create a decorated student
#         decorated_student = StudentDecorator.create_decorated_student(name, student_type,id)
#         return decorated_student

#     # @staticmethod
#     # def get_last_student_id_from_service():
#     #     try:
#     #         student_service = StudentService()
#     #         students = student_service.get_students()

#     #         if students:
#     #             last_student_id = max(int(student['student_id']) for student in students)
#     #             return last_student_id
#     #     except Exception as e:
#     #         # Handle exceptions, e.g., service errors, JSON decoding issues
#     #         print(f"Error: {e}")

#         # Return a default starting ID if unable to determine the last ID
#         return 110  # Default starting ID
# # class StudentFactory:
# #     @classmethod
# #     def create_student(cls, name, student_type, student_id=None):
# #         if student_id is None:
# #             last_student_id = cls.get_last_student_id_from_service()
# #             student_id = last_student_id + 1

# #         student = Student(name, student_id, student_type)
# #         return student

# #     @staticmethod
# #     def get_last_student_id_from_service():
# #         try:
# #             student_service = StudentService()
# #             students = student_service.get_students()
# #             print(students)
# #             if students:
# #                 last_student_id = max(int(student['student_id']) for student in students)
# #                 return last_student_id
# #         except Exception as e:
# #             # Handle exceptions, e.g., service errors, JSON decoding issues
# #             print(f"Error: {e}")

# #         # Return a default starting ID if unable to determine the last ID
# #         return 110  # Default starting ID


# # factory.py
# class CourseFactory:
#     @classmethod
#     def create_course(cls, course_name, course_id=None):
#         if course_id is None:
#             last_course_id = cls.get_last_course_id_from_service()
#             course_id = last_course_id + 1

#         course = Course(course_id, course_name)
#         return course

#     @staticmethod
#     def get_last_course_id_from_service():
#         try:
#             course_service = CourseService()  # Assuming you have a CourseService
#             courses = course_service.get_courses()
#             print(courses)
#             if courses:
#                 last_course_id = max(int(course['course_id']) for course in courses)
#                 return last_course_id
#         except Exception as e:
#             # Handle exceptions, e.g., service errors, JSON decoding issues
#             print(f"Error: {e}")

#         # Return a default starting ID if unable to determine the last ID
#         return 110  # Default starting ID

# # factory.py
# class EnrollmentFactory:
#     @classmethod
#     def create_enrollment(cls, data):
#         return Enrollment(data)

#     def update_enrollment(self, enrollment, student_id, course_id):
#         # Assuming 'enrollment' is an object with 'data' attribute containing 'student_id' and 'course_id'
#         enrollment_data = enrollment.data

#         # If the course_id is already present, append the student_id to the existing list
#         if course_id in enrollment_data:
#             enrollment_data[course_id].append(student_id)
#         else:
#             # If the course_id is not present, create a new entry with the student_id
#             enrollment_data[course_id] = [student_id]

#         enrollment.data = enrollment_data
#         return enrollment  # Return the modified Enrollment object




#//-----------------

from abc import ABC, abstractmethod

class FactoryInterface(ABC):
    @abstractmethod
    def create(self, *args, **kwargs):
        pass

    @staticmethod
    @abstractmethod
    def get_last_id_from_service():
        pass
