import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditStudentComponent } from '../add-edit-student/add-edit-student.component';
import { CombineNameAndSurnamePipe } from '../combine-name-and-surname.pipe';
import { DeleteStudentComponent } from '../delete-student/delete-student.component';
import { StudentComponent } from '../student.component';
import { TitleSizeDirective } from '../title-size.directive';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StudentComponent,
    AddEditStudentComponent,
    CombineNameAndSurnamePipe,
    TitleSizeDirective,
    DeleteStudentComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports : [ 
    StudentComponent,
    AddEditStudentComponent,
    CombineNameAndSurnamePipe,
    TitleSizeDirective,
    DeleteStudentComponent
  ]
})
export class StudentModuleModule { }
