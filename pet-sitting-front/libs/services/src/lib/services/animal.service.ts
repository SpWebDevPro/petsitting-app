import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimalModel } from './models/animal.model';

@Injectable({ providedIn: 'root' })
export class AnimalService {
  private readonly apiUrl = 'http://localhost:8080/animal/';
  /* private readonly apiUrl = 'http://13.38.89.48:8080/animal/'; */
  private headers = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'content-type': 'application/json',
  });

  constructor(private httpClient: HttpClient) {}

  createAnimal(animal: AnimalModel): Observable<AnimalModel> {
    const url = this.apiUrl + 'create';
    return this.httpClient.post<AnimalModel>(url, animal, {
      headers: this.headers,
    });
  }

  getAnimalListByUserId(user_id: number) {
    const url = this.apiUrl + 'list/' + user_id;
    return this.httpClient.get<AnimalModel[]>(url, { headers: this.headers });
  }
}
