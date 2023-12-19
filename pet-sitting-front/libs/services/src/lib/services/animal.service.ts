
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimalModel } from './models/animal.model';

@Injectable({ providedIn: 'root' })
export class AnimalService {
  private readonly apiUrl = 'http://localhost:8080/animal/';

  constructor(private httpClient: HttpClient) {}

  createAnimal(animal: AnimalModel): Observable<any> {
    const url = this.apiUrl + 'create';
    const headers = { 'content-type': 'application/json' };
    return this.httpClient.post(url, animal, { headers: headers });
  }
  getAnimalListByUserId(user_id:number){
    const url = this.apiUrl + 'list/' + user_id;
    return this.httpClient.get<AnimalModel[]>(url);

  }
}
