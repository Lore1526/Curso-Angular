import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { AddEditStudentComponent } from './add-edit-student/add-edit-student.component';
import { StudentComponent } from './student.component';

const routes: Routes = [
  { path: 'student', component: StudentComponent, canActivate : [AuthGuard] },
  { path: 'addEditStudent', component: AddEditStudentComponent, canActivate : [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
