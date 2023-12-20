import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BookingModel } from './models/booking.model';

@Injectable({ providedIn: 'root' })
export class BookingService {
  private readonly apiUrl = 'http://localhost:8080/booking/';

  constructor(private httpClient: HttpClient) {}

  createBooking(bookingModel: BookingModel): Observable<any> {
    const url = this.apiUrl + 'create';
    const headers = { 'content-type': 'application/json' };

    return this.httpClient.post(url, bookingModel, { headers: headers });
  }

  getBookingOfSitterByStatus(sitterId: number, status : string){

    const url = this.apiUrl + 'sitter/list/'+sitterId+'/'+status;

    return this.httpClient.get<BookingModel[]>(url,);
  }
 updateBookingStatus(bookingId: number, status : string){

  const url = this.apiUrl + bookingId+'/'+status;
  const headers = { 'content-type': 'application/json' };
    return this.httpClient.put<number>(url,headers);
 }
 
}
