import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ServiceModel } from "./models/service.model";

@Injectable({ providedIn: 'root' })
export class SitterService {
  private readonly apiUrl = 'http://localhost:8080/sitterservice/';
  private readonly apiAddressUrl= 'https://api-adresse.data.gouv.fr/search/'

  constructor(private httpClient: HttpClient) {}

  getServices(type: string, city:string) {

    const url = this.apiUrl + 'lists?type='+type+"&city="+city;
    return this.httpClient.get<ServiceModel[]>(url);

  }
  
  auCompletion( address :string){
//    curl 'https://api-adresse.data.gouv.fr/search/?q=20%20avenue%20de%20S%C3%A9gur%2C%20Paris&type=housenumber&autocomplete=1'

    const url = this.apiUrl + '?q='+address+"&autocomplete=1";
    return this.httpClient.get<ServiceModel[]>(url);
  }
 
}