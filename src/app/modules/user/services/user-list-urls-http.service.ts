import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserListUrlsHttpService {

  constructor(private http: HttpClient) { }

  public getProfile(token: string, idUser: string): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('id', idUser);
    let headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Token': token
      }
    );
    return this.http.get(`https://7a9731a3-300f-4cc9-9051-806b437a9ed7.mock.pstmn.io/api/user/`, { params: queryParams, headers })
  }

  public getLinksUser(token: string): Observable<any> {
    let headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Token': token
      }
    );
    return this.http.get(`https://7a9731a3-300f-4cc9-9051-806b437a9ed7.mock.pstmn.io/api/links/`, { headers })
  }
}
