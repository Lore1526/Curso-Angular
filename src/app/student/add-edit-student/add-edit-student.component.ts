import { ActivatedRoute, Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from '../student';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-add-edit-student',
  templateUrl: './add-edit-student.component.html',
  styleUrls: ['./add-edit-student.component.css']
})
export class AddEditStudentComponent implements OnInit {
  studentForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    surname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    course: new FormControl('', [Validators.required, Validators.minLength(1)]),
    hourCourse: new FormControl('', Validators.required),
  })

  @Input() student: any;


  constructor(private builder: FormBuilder, private studentService: StudentServiceService, private router: Router, private route: ActivatedRoute) {
    this.studentForm.controls['id'].setValue(this.route.snapshot.paramMap.get('Id'));
    this.studentForm.controls['name'].setValue(this.route.snapshot.paramMap.get('Name'));
    this.studentForm.controls['surname'].setValue(this.route.snapshot.paramMap.get('Surname'));
    this.studentForm.controls['course'].setValue(this.route.snapshot.paramMap.get('Course'),);
    this.studentForm.controls['hourCourse'].setValue(this.route.snapshot.paramMap.get('HourCourse'));
  }
  get id(): AbstractControl | null {
    return this.studentForm.get('id');
  }
  get name(): AbstractControl | null {
    return this.studentForm.get('name');
  }
  get surname(): AbstractControl | null {
    return this.studentForm.get('surname');
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
      surname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      course: new FormControl('', [Validators.required, Validators.minLength(1)]),
      hourCourse: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {

  }

  async onSubmit() {
    let student = this.studentService.getStudentById(Number(this.id?.value)).subscribe();
    if (student) {
      this.studentService.updateStudent({
        Id: Number(this.id?.value),
        Name: String(this.name?.value),
        Surname: String(this.surname?.value),
        Course: String(this.course?.value),
        HourCourse: String(this.hourCourse?.value)
      });
    } else {
      await this.studentService.addStudent({
        Id: Number(this.id?.value),
        Name: String(this.name?.value),
        Surname: String(this.surname?.value),
        Course: String(this.course?.value),
        HourCourse: String(this.hourCourse?.value)
      });
    }

    this.router.navigate(['/student']);
    this.studentForm.reset();
  }

}

