import { AddEditCourseComponent } from './../add-edit-course/add-edit-course.component';
import { AngularMaterialModule } from './../../angular-material/angular-material.module';
import { DeleteCourseComponent } from './../delete-course/delete-course.component';
import { DetailCourseComponent   } from './../detail-course/detail-course.component';
import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from '../courses.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CoursesComponent,
    DetailCourseComponent,
    DeleteCourseComponent,
    AddEditCourseComponent
  ],
    
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [
    CoursesComponent,
    DetailCourseComponent,
    DeleteCourseComponent,
    AddEditCourseComponent
  ]
})
export class CourseModuleModule { }
