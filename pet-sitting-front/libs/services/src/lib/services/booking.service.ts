import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingModel } from './models/booking.model';

@Injectable({ providedIn: 'root' })
export class BookingService {
  private readonly apiUrl = 'http://localhost:8080/booking/';
  /* private readonly apiUrl = 'http://13.38.89.48:8080/booking/'; */
  private headers = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'content-type': 'application/json',
  });

  constructor(private httpClient: HttpClient) {}

  createBooking(bookingModel: BookingModel): Observable<BookingModel> {
    const url = this.apiUrl + 'create';
    return this.httpClient.post<BookingModel>(url, bookingModel, {
      headers: this.headers,
    });
  }

  getBookingOfSitterByStatus(sitterId: number, status: string) {
    const url = this.apiUrl + 'sitter/list/' + sitterId + '/' + status;
    return this.httpClient.get<BookingModel[]>(url, { headers: this.headers });
  }
  updateBookingStatus(bookingId: number, status: string) {
    const url = this.apiUrl + bookingId + '/' + status;
    return this.httpClient.put<number>(url, this.headers);
  }
}
