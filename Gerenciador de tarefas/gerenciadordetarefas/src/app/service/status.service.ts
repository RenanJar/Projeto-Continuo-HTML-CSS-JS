import {HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { Status } from "../model/Status";


@Injectable({
    providedIn: 'root'
  })
  export class StatusService {
  
    constructor(private http:HttpClient) { }
  
    token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }


    getAllstatus(): Observable<Status[]>{
        return this.http.get<Status[]>('http://localhost:8080/status',this.token)
    }

    postStatus(status:Status):Observable<Status>{
        return this.http.post<Status>('http://localhost:8080/status',status,this.token)
    }

    putStatus(status:Status):Observable<Status>{
      return this.http.put<Status>('http://localhost:8080/status/',status,this.token)
    }

    deleteStatus(id:number){
      return this.http.delete(`http://localhost:8080/status/${id}`,this.token)
    }

    getByIdstatus(id:number):Observable<Status>{
      return this.http.get<Status>(`http://localhost:8080/status/${id}`,this.token)

    }
}