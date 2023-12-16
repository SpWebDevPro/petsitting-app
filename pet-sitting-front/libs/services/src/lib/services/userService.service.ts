import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ServiceModel } from "./models/service.model";
import { UserModel } from "./models/user.model";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly apiUrl = 'http://localhost:8080/userservice/';

  constructor(private httpClient: HttpClient) {}
 
 userr !: UserModel;
  createUser(user : UserModel) :  Observable<any>{
    const url = this.apiUrl + 'create'
    const headers = { 'content-type': 'application/json'};
      const userJson=JSON.stringify(user);

    return this.httpClient.post(url , userJson,{'headers':headers})

  }
  
  auCompletion( address :string){
//    curl 'https://api-adresse.data.gouv.fr/search/?q=20%20avenue%20de%20S%C3%A9gur%2C%20Paris&type=housenumber&autocomplete=1'

    const url = this.apiUrl + '?q='+address+"&autocomplete=1";
    return this.httpClient.get<ServiceModel[]>(url);
  }
  login(email: string, password: string )
  {
    const url = this.apiUrl + 'login'

    return this.httpClient.get<UserModel>(url + '?email='+email+'&password=' +password);

  }
}