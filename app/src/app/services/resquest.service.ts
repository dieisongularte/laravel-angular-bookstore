import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

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
    let url = `${environment.apiUrl}${endpoint}`;
    return this.http.get<T>(url, {
      headers: this.getHeaders(),
    });
  }
}
