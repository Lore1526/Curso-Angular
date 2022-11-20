import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentModuleModule } from './student-module/student-module.module';
import { StudentService } from './student-service.service';
import { RouterTestingModule } from '@angular/router/testing';
import { StudentComponent } from './student.component';
import { Router } from '@angular/router';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Student } from './student';

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
});
