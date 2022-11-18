import { TestBed } from '@angular/core/testing';
import { StudentService } from './student-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { Student } from './student';

describe('StudentServiceService', () => {
  let service: StudentService;
  let httpTestingController: HttpTestingController;

  let url : string =  'https://63643c0b7b209ece0f43457e.mockapi.io/api/v1/students';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(StudentService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get students', () => {
    const students :Student[] = [{
      Id : 1,
      Name: 'Lorena',
      Surname: 'De Luca',
      HourCourse: 'morning',
      Course: 'Angular'
    }];

    service.getStudent().subscribe(sdents => expect(sdents.length).toBe(1));
    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush(students);
  });
  
  it('Add Student', () => {
    const student :Student = {
      Id : 1,
      Name: 'Lorena',
      Surname: 'De Luca',
      HourCourse: 'morning',
      Course: 'Angular'
    };
    service.addStudent(student).subscribe();
    const req = httpTestingController.expectOne('https://63643c0b7b209ece0f43457e.mockapi.io/api/v1/students');
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(student);
    req.flush('');
  });

  it('Update Student', () => {
    const student :Student = {
      Id : 1,
      Name: 'Lorena',
      Surname: 'De Luca',
      HourCourse: 'morning',
      Course: 'Angular'
    };
    service.updateStudent(student).subscribe();
    const req = httpTestingController.expectOne('https://63643c0b7b209ece0f43457e.mockapi.io/api/v1/students/' + student.Id);
    expect(req.request.method).toEqual('PUT');
    expect(req.request.body).toEqual(student);
    req.flush('');
  });

  it('should get students', () => {
    const student :Student = {
      Id : 1,
      Name: 'Lorena',
      Surname: 'De Luca',
      HourCourse: 'morning',
      Course: 'Angular'
    };

    service.getStudentById(student.Id).subscribe(sdents => expect(sdents).toBe(student));
    const req = httpTestingController.expectOne(url+'/' + student.Id);
    expect(req.request.method).toEqual('GET');
    req.flush(student);
  });

  it('delete student', () => {
    const student :Student = {
      Id : 1,
      Name: 'Lorena',
      Surname: 'De Luca',
      HourCourse: 'morning',
      Course: 'Angular'
    };

    service.deleteStudent(student.Id).subscribe();
    const req = httpTestingController.expectOne(url+'/' + student.Id);
    expect(req.request.method).toEqual('DELETE');
    req.flush('');
  });

});
