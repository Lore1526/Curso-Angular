import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, find, from, Observable, observable, of } from 'rxjs';
import { Inscription } from './Inscription';



@Injectable({
  providedIn: 'root'
})

export class InscriptionServiceService {

  private inscriptionUrl = 'https://63643c0b7b209ece0f43457e.mockapi.io/api/v1/inscriptions';

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

