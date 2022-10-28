import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditInscriptionComponent } from './add-edit-inscription/add-edit-inscription.component';
import { InscriptionComponent } from './inscription.component';

const routes: Routes = [
  { path: 'inscription', component: InscriptionComponent },
  { path: 'addEditInscription', component: AddEditInscriptionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscriptionRoutingModule { }
