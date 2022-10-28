import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditInscriptionComponent } from '../add-edit-inscription/add-edit-inscription.component';
import { CombineNameAndSurnamePipe } from '../combine-name-and-surname.pipe';
import { DeleteInscriptionComponent } from '../delete-inscription/delete-inscription.component';
import { InscriptionComponent } from '../inscription.component';
import { TitleSizeDirective } from '../title-size.directive';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InscriptionComponent,
    AddEditInscriptionComponent,
    CombineNameAndSurnamePipe,
    TitleSizeDirective,
    DeleteInscriptionComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports : [ 
    InscriptionComponent,
    AddEditInscriptionComponent,
    CombineNameAndSurnamePipe,
    TitleSizeDirective,
    DeleteInscriptionComponent
  ]
})
export class InscriptionModuleModule { }
