import { Course } from './../course';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { filter } from 'rxjs';
import { DeleteCourseComponent } from '../delete-course/delete-course.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.css']
})
export class DetailCourseComponent implements OnInit {

  @Input() detail! : Course;
  @Output() newItemEvent = new EventEmitter<number>();
  
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  deleteCourse(id: number): void {
    const dialogRef = this.dialog.open(DeleteCourseComponent, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == "Yes") {
        this.newItemEvent.emit(id);
      }
    });
  }
}
