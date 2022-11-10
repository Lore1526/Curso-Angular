import { Router } from '@angular/router';
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

  constructor(private courseService: CourseService, public dialog: MatDialog, private router: Router, private CourseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getCourse().subscribe(x => this.Courses = x);
  }

  RemoveItem(id: number) {
    this.CourseService.deleteCourse(id).subscribe(x => {
      this.Courses = this.Courses.filter(r => r.Id !== id);
    })
  }

  navigateToAddEditCourse(): void {
    this.router.navigate(['/addEditCourse']);
  }
}


