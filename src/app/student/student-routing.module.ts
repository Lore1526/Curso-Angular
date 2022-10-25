import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditStudentComponent } from './add-edit-student/add-edit-student.component';
import { StudentComponent } from './student.component';

const routes: Routes = [
  { path: 'student', component: StudentComponent },
  { path: 'addEditStudent', component: AddEditStudentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
