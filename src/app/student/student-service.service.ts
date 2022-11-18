import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, find, map, Observable, observable, of, Subscription } from 'rxjs';
import { Student } from './student';


@Injectable({
  providedIn: 'root'
})

export class StudentService {
  

  private studentUrl = 'https://63643c0b7b209ece0f43457e.mockapi.io/api/v1/students';

  constructor(private http: HttpClient) { }

  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.studentUrl, student);
  }

  getStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentUrl);
  }

  getStudentById(studentId: number): Observable<Student> {
    return this.http.get<Student>(this.studentUrl + "/" + studentId);
  }

  updateStudent(student: Student): Observable<any> {
    return this.http.put(this.studentUrl + "/" + student.Id, student);
  }
  deleteStudent(id: number) {
    return this.http.delete(this.studentUrl + "/" + id);
  }
}

