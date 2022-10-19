import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MainComponent } from './main/main.component';
import { StudentComponent } from './student/student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddEditStudentComponent } from './student/add-edit-student/add-edit-student.component';
import { AppRoutingModule } from './app-routingModule';
import { CombineNameAndSurnamePipe } from './student/combine-name-and-surname.pipe';
import { TitleSizeDirective } from './student/title-size.directive';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MenuComponent,
    ToolbarComponent,
    MainComponent,
    StudentComponent,
    AddEditStudentComponent,
    CombineNameAndSurnamePipe,
    TitleSizeDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    RouterModule.forRoot([
      { path: '', component: StudentComponent },
      { path: 'student', component: StudentComponent },
      { path: 'addEditStudent', component: AddEditStudentComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

