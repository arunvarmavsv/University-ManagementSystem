from .models import Enrollment
from .factory import FactoryInterface

class EnrollmentFactory(FactoryInterface):
    @classmethod
    def create(cls, data):
        return Enrollment(data)

    def update_enrollment(self, enrollment, student_id, course_id):
        enrollment_data = enrollment.data

        if course_id in enrollment_data:
            enrollment_data[course_id].append(student_id)
        else:
            enrollment_data[course_id] = [student_id]

        enrollment.data = enrollment_data
        return enrollment
