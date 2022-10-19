import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditStudentComponent } from './student/add-edit-student/add-edit-student.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
    { path: '/', component: StudentComponent },
    { path: '/addEditStudent', component: AddEditStudentComponent }];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

