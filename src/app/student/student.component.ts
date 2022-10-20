import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { StudentServiceService } from './student-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from './student';
import { MatDialog } from '@angular/material/dialog';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  edit: string;
  delete: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', edit: '', delete: '' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', edit: '', delete: '' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', edit: '', delete: '' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', edit: '', delete: '' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', edit: '', delete: '' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', edit: '', delete: '' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', edit: '', delete: '' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', edit: '', delete: '' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', edit: '', delete: '' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', edit: '', delete: '' },

];

const students: Student[] = [
  { Id: 1, Name: 'Juan', Surname: 'Perez', Course: 'A', HourCourse: 'Mañana' },
  { Id: 2, Name: 'Pedro', Surname: 'Garcia', Course: 'A', HourCourse: 'Noche' },
  { Id: 3, Name: 'Carlos', Surname: 'Lopez', Course: 'C', HourCourse: 'Tarde' },
  { Id: 4, Name: 'Jorge', Surname: 'Gutierrez', Course: 'B', HourCourse: 'Tarde' },
  { Id: 5, Name: 'Luis', Surname: 'Dominguez', Course: 'B', HourCourse: 'Mañana' },
  { Id: 6, Name: 'Sandro', Surname: 'Rodriguez', Course: 'B', HourCourse: 'Mañana' },
  { Id: 7, Name: 'Jorge', Surname: 'Campanella', Course: 'C', HourCourse: 'Noche' },
  { Id: 8, Name: 'María', Surname: 'Sanchez', Course: 'B', HourCourse: 'Tarde' },
  { Id: 9, Name: 'Juana', Surname: 'Liberal', Course: 'C', HourCourse: 'Noche' },
  { Id: 10, Name: 'Margarita', Surname: 'Olivieri', Course: 'A', HourCourse: 'Tarde' },
]


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})


export class StudentComponent implements OnInit {

  displayedColumns: string[] = ['Id', 'Name', 'Course', 'HourCourse', 'edit', 'delete'];
  dataSource: Student[] = [];


  constructor(private router: Router, private studentService: StudentServiceService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource = this.studentService.getStudent();
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
        this.dataSource = this.dataSource.filter(r => r.Id !== element.Id);
      }
    });
  }

  editStudent(student: Student):void{
    this.router.navigate(['/addEditStudent', student]);
  }
}
