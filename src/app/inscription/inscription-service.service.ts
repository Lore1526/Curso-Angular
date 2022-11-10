import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, find, from, Observable, observable, of } from 'rxjs';
import { Inscription } from './Inscription';



@Injectable({
  providedIn: 'root'
})

export class InscriptionServiceService {

  private inscriptionUrl = 'https://63643c0b7b209ece0f43457e.mockapi.io/api/v1/inscriptions';

  // Inscriptions: Inscription[] = [
  //   { Id: 1, Name: 'Juan', Surname: 'Perez', Course: 'Angular', Price: 2500 },
  //   { Id: 2, Name: 'Pedro', Surname: 'Garcia', Course: 'UX/UI', Price: 990 },
  //   { Id: 3, Name: 'Carlos', Surname: 'Lopez', Course: 'React', Price: 6500 },
  //   { Id: 4, Name: 'Jorge', Surname: 'Gutierrez', Course: 'Programación Web', Price: 7200 },
  //   { Id: 5, Name: 'Luis', Surname: 'Dominguez', Course: 'Data Science', Price: 8999 },
  //   { Id: 6, Name: 'Sandro', Surname: 'Rodriguez', Course: 'Project Managment', Price: 5400 },
  //   { Id: 7, Name: 'Jorge', Surname: 'Campanella', Course: 'Figma', Price: 3200 },
  //   { Id: 8, Name: 'María', Surname: 'Sanchez', Course: 'Photoshop', Price: 6800 },
  //   { Id: 9, Name: 'Juana', Surname: 'Liberal', Course: 'Ilustrator', Price: 3592 },
  //   { Id: 10, Name: 'Margarita', Surname: 'Olivieri', Course: 'Phyton', Price: 600 },
  // ]

  constructor(private http: HttpClient) { }

  addInscription(inscription: Inscription): Observable<Inscription> {
    return this.http.post<Inscription>(this.inscriptionUrl, inscription);
  }

  getInscription(): Observable<Inscription[]> {
    return this.http.get<Inscription[]>(this.inscriptionUrl);
  }

  getInscriptionById(inscriptionId: number): Observable<Inscription> {
    return this.http.get<Inscription>(this.inscriptionUrl + "/" + inscriptionId);
  }

  updateInscription(inscription: Inscription): Observable<any> {

    return this.http.put(this.inscriptionUrl + "/" + inscription.Id, inscription);
  }
  deleteInscription(id: number) {
    return this.http.delete(this.inscriptionUrl + "/" + id);
  }
}

