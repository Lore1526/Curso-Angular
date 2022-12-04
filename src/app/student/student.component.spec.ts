import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentModuleModule } from './student-module/student-module.module';
import { StudentService } from './student-service.service';
import { RouterTestingModule } from '@angular/router/testing';
import { StudentComponent } from './student.component';
import { Router } from '@angular/router';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Student } from './student';
import { Observable, of } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';
import { DeleteStudentComponent } from './delete-student/delete-student.component';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;
  let router :any;
  let studentService: StudentService;
  let httpTestingController : any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentComponent ],
      providers: [StudentService],
      imports: [
        StudentModuleModule,
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    studentService = TestBed.inject(StudentService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnit: should fill datasource', async () => {
    const students :Student[] = [{
        Id : 1,
        Name: 'Lorena',
        Surname: 'De Luca',
        HourCourse: 'morning',
        Course: 'Angular'
      }];
    spyOn(studentService,'getStudent').and.returnValues(of(students));

    component.ngOnInit();
    expect(component.dataSource).toBe(students);
    expect(studentService.getStudent).toHaveBeenCalledTimes(1);
  });

  it('navigateToAddEditStudent:should navigate to addEditStudent', () =>{
    const component = fixture.componentInstance;
    const navigateSpy = spyOn(router, 'navigate');
    component.navigateToAddEditStudent();
    expect(navigateSpy).toHaveBeenCalledWith(['/addEditStudent']);
  })

  it('editStudent: should navigate to addEditStudent', () =>{
    const component = fixture.componentInstance;
    const navigateSpy = spyOn(router, 'navigate');
    let student : any;
    component.editStudent(student);
    expect(navigateSpy).toHaveBeenCalledWith(['/addEditStudent',student]);
  })

  it('delete Student: should open Delete component', () =>{
    const students :Student[] = [{
        Id : 1,
        Name: 'Lorena',
        Surname: 'De Luca',
        HourCourse: 'morning',
        Course: 'Angular'
      }];
    const component = fixture.componentInstance;
    const dialogOpen = spyOn(component.dialog, 'open')
    .and
    .returnValue({
        afterClosed: () => of("Yes")
    } as MatDialogRef<typeof component>);
    const serviceSpy = spyOn(studentService, 'deleteStudent').and.returnValue(of());
    
    component.deleteStudent(students[0]);
    expect(dialogOpen).toHaveBeenCalledWith(DeleteStudentComponent, 
        {
            width: '250px'
        });

    expect(serviceSpy).toHaveBeenCalledWith(students[0].Id);
  })

});
