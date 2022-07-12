import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResquestService {
  constructor(private http: HttpClient) {}

  public getHeaders(): HttpHeaders {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return headers;
  }

  getAll<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(endpoint, {
      headers: this.getHeaders(),
    });
  }
}
