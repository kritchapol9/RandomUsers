import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl: string = 'https://randomuser.me/api/';
  constructor(private http: HttpClient) { }

  GetUser(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  GetUsers(results: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?results=${results}`);
  }
}
