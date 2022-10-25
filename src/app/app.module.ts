import { StudentModuleModule } from './student/student-module/student-module.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModuleRoutingModule } from './app-routing-module/app-routing-module-routing.module';
import { CourseModuleModule } from './courses/course-module/course-module.module';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MenuComponent,
    ToolbarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModuleRoutingModule,
    StudentModuleModule,
    CourseModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

