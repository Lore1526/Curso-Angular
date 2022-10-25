import { CourseService } from './course-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  Courses$: any;

  constructor(private courseService: CourseService) {

   }

  ngOnInit(): void {
    this.Courses$ = this.courseService.getCourses();
  }

}
