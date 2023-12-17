import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceModel } from './models/service.model';

@Injectable({ providedIn: 'root' })
export class SitterService {
  private readonly apiUrl = 'http://localhost:8080/sitterservice/';

  constructor(private httpClient: HttpClient) {}

  getServices(type: string, city: string) {
    const url = this.apiUrl + 'lists?type=' + type + '&city=' + city;
    return this.httpClient.get<ServiceModel[]>(url);
  }

  getSitterDataById(id: number) {}

  getServicesBySitterId(id: number) {
    const url = this.apiUrl + 'list/' + id;
    console.log(url);
    return this.httpClient.get<ServiceModel[]>(url);
  }
}
