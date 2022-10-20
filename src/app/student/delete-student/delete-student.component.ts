import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteStudentComponent>) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close("No");
  }
  onYesClick(): void {
    this.dialogRef.close("Yes");
  }
}
