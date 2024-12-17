"""
URL configuration for university_project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from .views import create_student, get_students,update_student,delete_student,create_course,register_student_in_course,get_enrollments,get_courses,get_logs,get_students_for_courseID
urlpatterns = [
    path('admin/', admin.site.urls),
     path('create-student/', create_student, name='create_student'),
    path('get-students/', get_students, name='get_students'),
     path('update-student/', update_student, name='update_student'),
    path('delete-student/', delete_student, name='delete_student'),
    path('create-course/', create_course, name='create_course'),
    path('register-student-in-course/', register_student_in_course, name='register_student'),
    path('get-enrollments/', get_enrollments, name='get_enrollments'),
    path('get-courses/', get_courses, name='get_courses'),
    path('get-logs/', get_logs, name='get_logs'),
    path('get-students-for-courseID/', get_students_for_courseID, name='get_logs'),
]
