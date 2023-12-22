import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceModel } from './models/service.model';

@Injectable({ providedIn: 'root' })
export class SitterService {
  private readonly apiUrl = 'http://13.38.89.48:8080/sitterservice/';
  private headers = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'content-type': 'application/json',
  });

  constructor(private httpClient: HttpClient) {}

  getServices(type: string, city: string) {
    const url = this.apiUrl + 'lists?type=' + type + '&city=' + city;
    return this.httpClient.get<ServiceModel[]>(url, { headers: this.headers });
  }

  getServicesBySitterId(id: number) {
    const url = this.apiUrl + 'list/' + id;
    console.log(url);
    return this.httpClient.get<ServiceModel[]>(url, { headers: this.headers });
  }

  createSitterService(servicedata: ServiceModel) {
    const url = this.apiUrl + 'create';
    return this.httpClient.post<ServiceModel>(url, servicedata, {
      headers: this.headers,
    });
  }

  getServiceById(serviceId: number) {
    const url = this.apiUrl + serviceId;
    return this.httpClient.get<ServiceModel>(url, { headers: this.headers });
  }
}
