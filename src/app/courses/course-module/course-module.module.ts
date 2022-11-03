import { AngularMaterialModule } from './../../angular-material/angular-material.module';
import { DeleteCourseComponent } from './../delete-course/delete-course.component';
import { DetailCourseComponent   } from './../detail-course/detail-course.component';
import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from '../courses.component';



@NgModule({
  declarations: [CoursesComponent,
    DetailCourseComponent,
    DeleteCourseComponent
  ],
    
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports : [
    CoursesComponent,
    DetailCourseComponent,
    DeleteCourseComponent
  ]
})
export class CourseModuleModule { }
