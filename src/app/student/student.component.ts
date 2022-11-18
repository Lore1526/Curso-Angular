import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { StudentService } from './student-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from './student';
import { MatDialog } from '@angular/material/dialog';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {

  displayedColumns: string[] = ['Id', 'Name', 'Course', 'HourCourse', 'edit', 'delete'];
  dataSource: Student[] = [];
  studentsSubscription!: Subscription;
  testStudents$! : Observable<Student[]>;


  constructor(private router: Router, private studentService: StudentService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.studentsSubscription = this.studentService.getStudent().subscribe(
      (students) => {
        this.dataSource = students
      }
    );
  }

  ngOnDestroy(): void {
    this.studentsSubscription.unsubscribe();
  }

  navigateToAddEditStudent(): void {
    this.router.navigate(['/addEditStudent']);
  }

  deleteStudent(element: Student): void {
    const dialogRef = this.dialog.open(DeleteStudentComponent, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == "Yes") {
        this.studentService.deleteStudent(element.Id).subscribe(z => {
          this.dataSource = this.dataSource.filter(r => r.Id !== element.Id);
        });
      }
    });
  }

  editStudent(student: Student): void {
    this.router.navigate(['/addEditStudent', student]);
  }
}
