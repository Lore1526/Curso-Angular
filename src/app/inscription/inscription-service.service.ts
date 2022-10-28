import { Injectable } from '@angular/core';
import { filter, find, from, Observable, observable, of } from 'rxjs';
import { Inscription } from './Inscription';



@Injectable({
  providedIn: 'root'
})

export class InscriptionServiceService {

  Inscriptions: Inscription[] = [
    { Id: 1, Name: 'Juan', Surname: 'Perez', Course: 'Angular', Price: 2500 },
    { Id: 2, Name: 'Pedro', Surname: 'Garcia', Course: 'UX/UI', Price: 990 },
    { Id: 3, Name: 'Carlos', Surname: 'Lopez', Course: 'React', Price: 6500 },
    { Id: 4, Name: 'Jorge', Surname: 'Gutierrez', Course: 'Programación Web', Price: 7200 },
    { Id: 5, Name: 'Luis', Surname: 'Dominguez', Course: 'Data Science', Price: 8999 },
    { Id: 6, Name: 'Sandro', Surname: 'Rodriguez', Course: 'Project Managment', Price: 5400 },
    { Id: 7, Name: 'Jorge', Surname: 'Campanella', Course: 'Figma', Price: 3200 },
    { Id: 8, Name: 'María', Surname: 'Sanchez', Course: 'Photoshop', Price: 6800 },
    { Id: 9, Name: 'Juana', Surname: 'Liberal', Course: 'Ilustrator', Price: 3592 },
    { Id: 10, Name: 'Margarita', Surname: 'Olivieri', Course: 'Phyton', Price: 600 },
  ]

  constructor() { }

  addInscription(Inscription: Inscription): Promise<Inscription[]> {
    this.Inscriptions = [...this.Inscriptions, Inscription];
       return new Promise((resolve, reject) => {
      if (!reject) {
        return resolve(this.Inscriptions)
      }
    });
  }

  getInscription(): Observable<Inscription[]> {
    return of(this.Inscriptions);
  }

  getInscriptionById(InscriptionId: number): Observable<any> {
    return from(this.Inscriptions).pipe(
      filter(x => x.Id === InscriptionId)
    )
 
  }
  updateInscription(Inscription: Inscription): void{
    let Inscriptions = [...this.Inscriptions.filter(r => r.Id !== Inscription.Id), Inscription];
    let InscriptionOrdered = [...Inscriptions].sort((a, b) => {
      if (a["Id"] < b["Id"]) {
        return -1;
      }

      if (a["Id"] > b["Id"]) {
        return 1;
      }
      return 0;
    });
    this.Inscriptions = [...InscriptionOrdered]
  }
}

