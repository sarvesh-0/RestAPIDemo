import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiURL = "http://localhost:4500"

  httpOptions ={
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  constructor(private httpClient:HttpClient) { }

  getAll():Observable<any>{
    return this.httpClient.get(this.apiURL+'/posts/')
  }

  create(post:Post):Observable<any>{
    return this.httpClient.post(this.apiURL+'/posts/',JSON.stringify(post),this.httpOptions)
  }

  find(id:number):Observable<any>{
    return this.httpClient.get(this.apiURL+'/posts/'+id)
  }

  update(id:number,post:Post):Observable<any>{
    return this.httpClient.put(this.apiURL+'/posts/'+id,JSON.stringify(post),this.httpOptions)
  }

  delete(id:number){
    return this.httpClient.delete(this.apiURL+'/posts/'+id,this.httpOptions)
  }
}
