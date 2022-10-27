import { Course } from './../course';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.css']
})
export class DetailCourseComponent implements OnInit {

  @Input() detail! : Course;
  
  constructor() { }

  ngOnInit(): void {
  }

}
