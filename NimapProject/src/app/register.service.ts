import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from './dataTypes';
import { Data } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
apiUrl= "http://localhost:3000/Registration";
  constructor(private http:HttpClient) {
   }
   addUser(data:Register): Observable<any> {
    return this.http.post<Register>(this.apiUrl,data);
  }

  }

