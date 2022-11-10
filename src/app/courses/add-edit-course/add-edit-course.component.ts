import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../course-service';

@Component({
  selector: 'app-add-edit-course',
  templateUrl: './add-edit-course.component.html',
  styleUrls: ['./add-edit-course.component.css']
})
export class AddEditCourseComponent implements OnInit {
  courseForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    startDate: new FormControl('', [Validators.required, Validators.minLength(3)]),
    days: new FormControl('', [Validators.required, Validators.minLength(1)]),
    hourCourse: new FormControl('', Validators.required),
    teacher: new FormControl('', Validators.required)
  })

  @Input() course: any;


  constructor(private builder: FormBuilder, private courseService: CourseService, private router: Router, private route: ActivatedRoute) {
    this.courseForm.controls['id'].setValue(this.route.snapshot.paramMap.get('Id'));
    this.courseForm.controls['name'].setValue(this.route.snapshot.paramMap.get('Name'));
    this.courseForm.controls['startDate'].setValue(this.route.snapshot.paramMap.get('StartDate'));
    this.courseForm.controls['days'].setValue(this.route.snapshot.paramMap.get('Days'),);
    this.courseForm.controls['hourCourse'].setValue(this.route.snapshot.paramMap.get('HourCourse'));
    this.courseForm.controls['teacher'].setValue(this.route.snapshot.paramMap.get('Teacher'));
  }
  get id(): AbstractControl | null {
    return this.courseForm.get('id');
  }
  get name(): AbstractControl | null {
    return this.courseForm.get('name');
  }
  get startDate(): AbstractControl | null {
    return this.courseForm.get('startDate');
  }
  get days(): AbstractControl | null {
    return this.courseForm.get('days');
  }
  get hourCourse(): AbstractControl | null {
    return this.courseForm.get('hourCourse');
  }
  get teacher(): AbstractControl | null {
    return this.courseForm.get('teacher');
  }

  private buildForm() {
    this.courseForm = this.builder.group({
      id: new FormControl(),
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      startDate: new FormControl('', [Validators.required, Validators.minLength(3)]),
      days: new FormControl('', [Validators.required, Validators.minLength(1)]),
      hourCourse: new FormControl('', Validators.required),
      teacher: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {

  }

  async onSubmit() {
    if (Number(this.id?.value) == 0) {
      this.courseService.addCourse({
        Id: Number(Math.random),
        Name: String(this.name?.value),
        StartDate: String(this.startDate?.value),
        Days: String(this.days?.value),
        HourCourse: String(this.hourCourse?.value),
        Teacher: String(this.teacher?.value)
      }).subscribe(r => {
        this.router.navigate(['/courses']);
        this.courseForm.reset();
      });
    } else {
      this.courseService.updateCourse({
        Id: Number(Math.random),
        Name: String(this.name?.value),
        StartDate: String(this.startDate?.value),
        Days: String(this.days?.value),
        HourCourse: String(this.hourCourse?.value),
        Teacher: String(this.teacher?.value)
      }).subscribe(r => {
        this.router.navigate(['/courses']);
        this.courseForm.reset();
      });
    }
  }

}
