import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseRoutingModule } from '../courses/course-routing.module';
import { InscriptionRoutingModule } from '../inscription/inscription-routing.module';
import { StudentRoutingModule } from '../student/student-routing.module';
import { StudentComponent } from '../student/student.component';

const routes: Routes = [
  { path: '', component: StudentComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes),
            StudentRoutingModule, 
            CourseRoutingModule, 
            InscriptionRoutingModule],
  exports: [RouterModule]

})
export class AppRoutingModuleRoutingModule { }
