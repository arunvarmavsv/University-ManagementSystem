# views.py
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST, require_GET
# from .factory import StudentFactory,CourseFactory
from .services import StudentService, ClassService,CourseService,EnrollmentService
from .student_factory import StudentFactory
from .course_factory import CourseFactory
from .enrollment_factory import EnrollmentFactory
from .services import LogService

@csrf_exempt
@require_POST
def create_student(request):
    data = request.POST
    name = data.get('name')
    # student_id = data.get('student_id')
    student_type = data.get('student_type')
    

    student = StudentFactory.create(name, student_type)
    StudentService().create_student(student)

    return JsonResponse({'status': 'success'})


@require_GET
def get_students(request):
    students = StudentService().get_students()
    return JsonResponse(students, safe=False)

@csrf_exempt
@require_POST
def update_student(request):
    data = request.POST
    student_id = data.get('student_id')
    name = data.get('name')
    student_type = data.get('student_type')

    student = StudentFactory.create(name, student_type, student_id)
    StudentService().update_student(student)

    return JsonResponse({'status': 'success'})
@csrf_exempt
@require_POST
def delete_student(request):
    data = request.POST
    student_id = data.get('student_id')

    StudentService().delete_student(student_id)

    return JsonResponse({'status': 'success'})

@csrf_exempt
@require_POST
def create_course(request):
    data = request.POST
    course_name = data.get('course_name')

    course = CourseFactory.create(course_name)
    CourseService().create_course(course)

    return JsonResponse({'status': 'success'})

@csrf_exempt
@require_POST
def register_student_in_course(request):
    data = request.POST
    student_id = data.get('student_id')
    course_id = data.get('course_id')

    EnrollmentService().register_student_in_course(student_id, course_id)

    return JsonResponse({'status': 'success'})

@csrf_exempt
@require_GET
def get_enrollments(request):
    enrollments = EnrollmentService().get_enrollment()
    return JsonResponse(enrollments, safe=False)

@csrf_exempt
@require_GET
def get_courses(request):
    courses = CourseService().get_courses()
    return JsonResponse(courses, safe=False)

@csrf_exempt
@require_GET
def get_logs(request):
    logs = LogService().get_logs()
    return JsonResponse(logs, safe=False)

@csrf_exempt
@require_GET
def get_students_for_courseID(request):
    # Use request.GET to retrieve query parameters from the URL
    course_id = request.GET.get('course_id')
    
    # Ensure the course_id is not None before passing it to the service
    if course_id is not None:
        enrollments = EnrollmentService().get_enrollment_for_course(course_id)
        print("enrollments", enrollments)
        return JsonResponse(enrollments, safe=False)