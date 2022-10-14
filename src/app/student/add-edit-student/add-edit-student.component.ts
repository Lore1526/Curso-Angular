import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from '../student';

@Component({
  selector: 'app-add-edit-student',
  templateUrl: './add-edit-student.component.html',
  styleUrls: ['./add-edit-student.component.css']
})
export class AddEditStudentComponent implements OnInit {
  studentForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    course: new FormControl('', [Validators.required, Validators.minLength(2)]),
    hourCourse: new FormControl('', Validators.required),
  })

  @Input() student: any;


  constructor(private builder: FormBuilder) {
  }
  get id(): AbstractControl | null {
    return this.studentForm.get('id');
  }
  get name(): AbstractControl | null {
    return this.studentForm.get('name');
  }
  get course(): AbstractControl | null {
    return this.studentForm.get('course');
  }
  get hourCourse(): AbstractControl | null {
    return this.studentForm.get('hourCourse');
  }


  private buildForm() {
    this.studentForm = this.builder.group({
      id: new FormControl(),
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      course: new FormControl('', [Validators.required, Validators.minLength(2)]),
      hourCourse: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.studentForm);
    this.studentForm.reset();
  }

}

