import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {User} from '../../Models/User'


const httpOptions = {
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

   
  getUsers():Observable<User[]>{
     const url:string='http://localhost:3000/users'
     return this.http.get<User[]>(url)
  }
}
