import { Pipe, PipeTransform } from '@angular/core';
import { Inscription } from './Inscription';

@Pipe({
  name: 'combineNameAndSurname'
})
export class CombineNameAndSurnamePipe implements PipeTransform {

  transform(student:Inscription): string {
    return student.Name + ' ' + student.Surname;
  }

}
