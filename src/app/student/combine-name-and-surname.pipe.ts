import { Pipe, PipeTransform } from '@angular/core';
import { Student } from './student';

@Pipe({
  name: 'combineNameAndSurname'
})
export class CombineNameAndSurnamePipe implements PipeTransform {

  transform(student:Student): string {
    return student.Name + ' ' + student.Surname;
  }

}
