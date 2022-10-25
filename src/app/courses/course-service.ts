import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses: Course[] = [
    {Id: 1, Name: 'Angular',StartDate: '10/11/2022',Days: 'Martes y Jueves',HourCourse: '20.30 a 22.30',Teacher: 'Pablo Paredes'},
    {Id: 2, Name: 'Marketing',StartDate: '06/09/2022',Days: 'Lunes y Miercoles',HourCourse: '17.30 a 19.30',Teacher: 'Lucía Fernandez'},
    {Id: 3, Name: 'Figma',StartDate: '17/07/2022',Days: 'Martes y Jueves',HourCourse: '12.30 a 14.30',Teacher: 'Jorge Rojas'},
    {Id: 4, Name: 'Blockchain',StartDate: '27/12/2022',Days: 'Lunes y Miercoles',HourCourse: '17.30 a 19.30',Teacher: 'Emanuel Juarez'},
    {Id: 5, Name: 'Javascript',StartDate: '30/10/2022',Days: 'Martes y Viernes',HourCourse: '20.30 a 22.30',Teacher: 'Pamela Torres'},
    {Id: 6, Name: 'React.JS',StartDate: '05/11/2022',Days: 'Martes y Jueves',HourCourse: '20.30 a 22.30',Teacher: 'Cinthia Lopez'},
  ]

  constructor() { }

  getCourses(): Observable<Course[]>{
    return of(this.courses);
  }
}
