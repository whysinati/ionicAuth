import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { User } from './user';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private url:string = 'http://localhost:3000/api/auth';

  constructor() { }

  test(): string{
    return 'success!';
  }

}
