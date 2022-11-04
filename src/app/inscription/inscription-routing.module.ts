import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { AddEditInscriptionComponent } from './add-edit-inscription/add-edit-inscription.component';
import { InscriptionComponent } from './inscription.component';

const routes: Routes = [
  { path: 'inscription', component: InscriptionComponent, canActivate : [AuthGuard]  },
  { path: 'addEditInscription', component: AddEditInscriptionComponent,canActivate : [AuthGuard]  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscriptionRoutingModule { }
