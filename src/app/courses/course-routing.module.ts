import { CoursesComponent } from './courses.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { AddEditCourseComponent } from './add-edit-course/add-edit-course.component';

const routes: Routes = [
  { path: 'courses', component: CoursesComponent, canActivate: [AuthGuard] },
  { path: 'addEditCourse', component: AddEditCourseComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
