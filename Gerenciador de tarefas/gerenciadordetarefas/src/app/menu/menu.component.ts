import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Status } from '../model/Status';
import { Tarefas } from '../model/Tarefas';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { StatusService } from '../service/status.service';
import { TarefasService } from '../service/tarefas.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  tarefas: Tarefas = new Tarefas()
  
  usuario: Usuario = new Usuario()
  idusuario = environment.id

  status: Status = new Status()
  listastatus: Status[]
  idstatus:number
  nomestatus:string

  constructor(

    private router :Router,
    private tarefasservice:TarefasService,
    private statusservice:StatusService,
    public authService:AuthService,
  ) { }

  ngOnInit(){
    if(environment.token == ''){
      this.router.navigate(['/login'])
    }

  }

  criar(){
    this.status.id=1
    this.tarefas.status=this.status

    this.usuario.id= this.idusuario
    this.tarefas.usuario= this.usuario

    this.tarefasservice.postTarefas(this.tarefas).subscribe((resp:Tarefas)=>{
      this.tarefas = resp

      alert("Tarefa criada com successo!")
    })




  }

  findByIdstatus(){
    this.statusservice.getByIdstatus(this.idstatus).subscribe((resp: Status) =>{
      this.status = resp
    })
  }

}
