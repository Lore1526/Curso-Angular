import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, find, map, Observable, observable, of, Subscription } from 'rxjs';
import { Student } from './student';


@Injectable({
  providedIn: 'root'
})

export class StudentServiceService {

  private studentUrl = 'https://63643c0b7b209ece0f43457e.mockapi.io/api/v1/student';
  // students: Student[] = [
  //   { Id: 1, Name: 'Juan', Surname: 'Perez', Course: 'A', HourCourse: 'Mañana' },
  //   { Id: 2, Name: 'Pedro', Surname: 'Garcia', Course: 'A', HourCourse: 'Noche' },
  //   { Id: 3, Name: 'Carlos', Surname: 'Lopez', Course: 'C', HourCourse: 'Tarde' },
  //   { Id: 4, Name: 'Jorge', Surname: 'Gutierrez', Course: 'B', HourCourse: 'Tarde' },
  //   { Id: 5, Name: 'Luis', Surname: 'Dominguez', Course: 'B', HourCourse: 'Mañana' },
  //   { Id: 6, Name: 'Sandro', Surname: 'Rodriguez', Course: 'B', HourCourse: 'Mañana' },
  //   { Id: 7, Name: 'Jorge', Surname: 'Campanella', Course: 'C', HourCourse: 'Noche' },
  //   { Id: 8, Name: 'María', Surname: 'Sanchez', Course: 'B', HourCourse: 'Tarde' },
  //   { Id: 9, Name: 'Juana', Surname: 'Liberal', Course: 'C', HourCourse: 'Noche' },
  //   { Id: 10, Name: 'Margarita', Surname: 'Olivieri', Course: 'A', HourCourse: 'Tarde' },
  // ]

  constructor(private http: HttpClient) { }

  addStudent(student: Student): Observable<Student[]> {
    return this.getStudent().pipe(
      map((students: any[]) => students.concat(student))
    );
  }

  getStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentUrl);
  }

  getStudentById(studentId: number): Observable<Student> {
    return this.getStudent().pipe(
      map((students: any[]) => students.find(p => p.Id === studentId))
    );
  }

  updateStudent(student: Student): void {
    let nStudents: Student[] = [];
    this.getStudent().pipe(
      map((students: any[]) => nStudents = students.filter(p => p.Id !== student.Id))).subscribe(
        z => {
          return [...nStudents, student].sort((a, b) => {
            if (a["Id"] < b["Id"]) {
              return -1;
            }

            if (a["Id"] > b["Id"]) {
              return 1;
            }
            return 0;
          });
        }
      )
  }
}

