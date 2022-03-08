import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  Usuario: Usuario = new Usuario
  confirmarSenha: string
  tipousuario:string

  constructor(
    private authService: AuthService,
    private router:  Router,
  ) { }

  ngOnInit(){

    window.scroll(0,0)
  }

  confirmSenha(event:any){
    this.confirmarSenha= event.target.value
  }

  tipoUsuario(event:any){
    this.tipoUsuario= event.target.value
  }

  cadastrar(){

    this.Usuario.tipo = "o"
    if(this.Usuario.senha!= this.confirmarSenha){
      alert(' A senhas estão incorretas.')
    }else{
      this.authService.cadastrar(this.Usuario).subscribe((resp:Usuario)=>{
        this.Usuario = resp
        this.router.navigate(['/entrar'])
        alert('Usuario cadastrado com sucesso!')
      })
    }

  }
  

}
