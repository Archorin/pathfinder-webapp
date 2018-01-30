import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Personnage } from './personnage';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PersonnageService {
  private personnagesUrl = 'http://localhost:5555/Api/Personnages/';

  constructor(private http: HttpClient) { }

  public getPersonnages(): Observable<Personnage[]> {
    // return PERSONNAGES;
    return this.http.get<Personnage[]>(this.personnagesUrl);
  }

  public getPersonnage(id: number): Observable<Personnage> {
    // return PERSONNAGES;
    return this.http.get<Personnage>(this.personnagesUrl + id);
  }
}
