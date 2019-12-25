import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http : HttpClient) { 
  }
  public getUsers(): Observable<any> {
    return this.http.get('https://reqres.in/api/users?delay=1')

  }
  public getUser(id: number): Observable<any> {
    return this.http.get(`https://reqres.in/api/users/${id}`)
  }
}
