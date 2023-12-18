import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceModel } from './models/service.model';
import { UserModel } from './models/user.model';
import { Observable } from 'rxjs';
import { AnimalModel } from './models/animal.model';

@Injectable({ providedIn: 'root' })
export class AnimalService {
  private readonly apiUrl = 'http://localhost:8080/animal/';

  constructor(private httpClient: HttpClient) {}

  createAnimal(animal: AnimalModel): Observable<any> {
    const url = this.apiUrl + 'create';

    console.log("Im herererrererererererrere");
   console.log(animal.dateOfBirth);
    const headers = { 'content-type': 'application/json' };
    const animalJson = JSON.stringify(animal);
console.log(animalJson);
    return this.httpClient.post(url, animal, { headers: headers });
  }

}
