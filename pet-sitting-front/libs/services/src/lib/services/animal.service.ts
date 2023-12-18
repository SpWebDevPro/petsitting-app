import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AnimalModel } from "./models/animal.model";

@Injectable({ providedIn: 'root' })
export class AnimalService{
  private readonly apiUrl = 'http://localhost:8080/animal/';

  constructor(private httpClient: HttpClient) {}

  getAnimalListByUserId(user_id:number){
    const url = this.apiUrl + 'list/' + user_id;
    console.log(url);
    return this.httpClient.get<AnimalModel[]>(url);

  }
}
