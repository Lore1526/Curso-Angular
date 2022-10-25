import { DetailCourseComponent   } from './../detail-course/detail-course.component';
import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from '../courses.component';



@NgModule({
  declarations: [CoursesComponent,
    DetailCourseComponent],
  imports: [
    CommonModule
  ],
  exports : [
    CoursesComponent,
    DetailCourseComponent
  ]
})
export class CourseModuleModule { }
