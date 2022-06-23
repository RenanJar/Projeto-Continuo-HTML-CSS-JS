import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tarefas } from '../model/Tarefas';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  constructor(private http:HttpClient) { }

  token = {
    Headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTarefas():Observable<Tarefas[]>{
    return this.http.get<Tarefas[]>('http://localhost:8080/tarefas')
  }

  postTarefas(tarefa: Tarefas):Observable<Tarefas>{
    return this.http.post<Tarefas>('http://localhost:8080/tarefas',tarefa)
  }
  
}
