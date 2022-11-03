import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-course',
  templateUrl: './delete-course.component.html',
  styleUrls: ['./delete-course.component.css']
})
export class DeleteCourseComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteCourseComponent>) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close("No");
  }
  onYesClick(): void {
    this.dialogRef.close("Yes");
  }
}
