import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceModel } from './models/service.model';
import { UserModel } from './models/user.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly apiUrl = 'http://13.38.89.48:8080/userservice/';
  private headers = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'content-type': 'application/json',
  });

  constructor(private httpClient: HttpClient) {}

  userr!: UserModel;
  createUser(user: UserModel): Observable<UserModel> {
    const url = this.apiUrl + 'create';
    const userJson = JSON.stringify(user);
    return this.httpClient.post(url, userJson, { headers: this.headers });
  }

  auCompletion(address: string) {
    //    curl 'https://api-adresse.data.gouv.fr/search/?q=20%20avenue%20de%20S%C3%A9gur%2C%20Paris&type=housenumber&autocomplete=1'
    const url = this.apiUrl + '?q=' + address + '&autocomplete=1';
    return this.httpClient.get<ServiceModel[]>(url, { headers: this.headers });
  }

  login(email: string, password: string) {
    const url = this.apiUrl + 'login';
    return this.httpClient.get<UserModel>(
      url + '?email=' + email + '&password=' + password,
      { headers: this.headers }
    );
  }

  getUserById(id: number) {
    const url = this.apiUrl + id;
    return this.httpClient.get<UserModel>(url, { headers: this.headers });
  }

  updateUserById(id: number, user: UserModel) {
    const url = this.apiUrl + 'update/' + id;
    console.log(url);
    const userJson = JSON.stringify(user);
    return this.httpClient.post<UserModel>(url, userJson, {
      headers: this.headers,
    });
  }
}
