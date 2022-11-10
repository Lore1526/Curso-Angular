import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courseUrl = 'https://63643c0b7b209ece0f43457e.mockapi.io/api/v1/courses';

  constructor(private http: HttpClient) { }

  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(this.courseUrl, course);
  }

  getCourse(): Observable<Course[]> {
    return this.http.get<Course[]>(this.courseUrl);
  }

  getCourseById(courseId: number): Observable<Course> {
    return this.http.get<Course>(this.courseUrl + "/" + courseId);
  }

  updateCourse(course: Course): Observable<any> {

    return this.http.put(this.courseUrl + "/" + course.Id, course);
  }
  deleteCourse(id: number) {
    return this.http.delete(this.courseUrl + "/" + id);
  }
}
