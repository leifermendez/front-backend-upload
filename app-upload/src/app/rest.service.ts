import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private http:HttpClient){

  }

  sendPost(body:FormData):Observable<any>{
    return this.http.post(`http://localhost:3000/upload`, body)
  }
}
