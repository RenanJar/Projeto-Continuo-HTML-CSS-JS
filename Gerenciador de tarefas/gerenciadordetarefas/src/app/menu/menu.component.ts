import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tarefas } from '../model/Tarefas';
import { TarefasService } from '../service/tarefas.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  tarefas: Tarefas = new Tarefas

  constructor(

    private router :Router,
    private tarefasservice:TarefasService
  ) { }

  ngOnInit(){
    if(environment.token == ''){
      this.router.navigate(['/login'])
    }

  }

  criar(){
    
  }

}
