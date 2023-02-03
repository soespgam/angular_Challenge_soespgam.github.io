import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginHttpService {

  constructor(private http: HttpClient) { }

  public getLogin(email: string, password: string):Observable<any> {
    let headers = new HttpHeaders(
      {
        'Content-Type': 'application/json'
      }
    );
    return this.http.post('https://7a9731a3-300f-4cc9-9051-806b437a9ed7.mock.pstmn.io/api/login/', {
      email,
      password
    },
      { headers })
  }
}
