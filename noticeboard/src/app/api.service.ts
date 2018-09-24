import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = "http://localhost:8000/api/auth/login";
  token: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }
  login(user): Observable<any> {
    var body = user
    return this.http.post(this.url, body)

  }
  getNotices(): Observable<any> {

    return this.http.get("http://127.0.0.1:8000/api/notice")

  }
  postNotices(inputData): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/notice',  inputData)

  }
  delete(id){
    return this.http.delete("http://127.0.0.1:8000/api/notice/"+id)
  }
}
