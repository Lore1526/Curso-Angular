import { StudentModuleModule } from './../student-module/student-module.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { MockInstance, ngMocks } from 'ng-mocks';
import { DeleteStudentComponent } from './delete-student.component';
import { DefaultTitleStrategy, TitleStrategy } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';


describe('DeleteStudentComponent', () => {
  let component: DeleteStudentComponent;
  let fixture: ComponentFixture<DeleteStudentComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [DeleteStudentComponent],
      imports: [
        // ngMocks.guts(StudentModuleModule);

        CommonModule,
        AngularMaterialModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        },
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DeleteStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

