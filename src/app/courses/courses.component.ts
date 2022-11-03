import { CourseService } from './course-service';
import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { DeleteCourseComponent } from './delete-course/delete-course.component';
import { MatDialog } from '@angular/material/dialog';
import { filter, Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  Courses!: Course[];

  constructor(private courseService: CourseService, public dialog: MatDialog) {}

  ngOnInit(): void {
   this.courseService.getCourses().subscribe(x => this.Courses = x);
  }

  RemoveItem(id: number) {
    this.Courses = this.Courses.filter(r => r.Id !== id);
    }
}


