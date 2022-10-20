import { Injectable } from '@angular/core';
import { filter, find, from, Observable, observable, of } from 'rxjs';
import { Student } from './student';



@Injectable({
  providedIn: 'root'
})

export class StudentServiceService {

  students: Student[] = [
    { Id: 1, Name: 'Juan', Surname: 'Perez', Course: 'A', HourCourse: 'Mañana' },
    { Id: 2, Name: 'Pedro', Surname: 'Garcia', Course: 'A', HourCourse: 'Noche' },
    { Id: 3, Name: 'Carlos', Surname: 'Lopez', Course: 'C', HourCourse: 'Tarde' },
    { Id: 4, Name: 'Jorge', Surname: 'Gutierrez', Course: 'B', HourCourse: 'Tarde' },
    { Id: 5, Name: 'Luis', Surname: 'Dominguez', Course: 'B', HourCourse: 'Mañana' },
    { Id: 6, Name: 'Sandro', Surname: 'Rodriguez', Course: 'B', HourCourse: 'Mañana' },
    { Id: 7, Name: 'Jorge', Surname: 'Campanella', Course: 'C', HourCourse: 'Noche' },
    { Id: 8, Name: 'María', Surname: 'Sanchez', Course: 'B', HourCourse: 'Tarde' },
    { Id: 9, Name: 'Juana', Surname: 'Liberal', Course: 'C', HourCourse: 'Noche' },
    { Id: 10, Name: 'Margarita', Surname: 'Olivieri', Course: 'A', HourCourse: 'Tarde' },
  ]

  constructor() { }

  addStudent(student: Student): Promise<Student[]> {
    this.students = [...this.students, student];
       return new Promise((resolve, reject) => {
      if (!reject) {
        return resolve(this.students)
      }
    });
  }

  getStudent(): Observable<Student[]> {
    return of(this.students);
  }

  getStudentById(studentId: number): Observable<any> {
    return from(this.students).pipe(
      filter(x => x.Id === studentId)
    )
 
  }
  updateStudent(student: Student): void{
    let students = [...this.students.filter(r => r.Id !== student.Id), student];
    let studentOrdered = [...students].sort((a, b) => {
      if (a["Id"] < b["Id"]) {
        return -1;
      }

      if (a["Id"] > b["Id"]) {
        return 1;
      }
      return 0;
    });
    this.students = [...studentOrdered]
  }
}

