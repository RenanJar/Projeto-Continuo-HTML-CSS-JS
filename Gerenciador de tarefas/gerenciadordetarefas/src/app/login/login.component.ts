import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuariologin: UsuarioLogin= new UsuarioLogin()

  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar(){
    this.auth.entrar(this.usuariologin).subscribe((resp:UsuarioLogin)=>{
      this.usuariologin=resp
      environment.token= this.usuariologin.token
      environment.nome=this.usuariologin.nome
      environment.foto=this.usuariologin.foto
      environment.id=this.usuariologin.id

      console.log(environment.token)
      console.log(environment.nome)
      console.log(environment.foto)
      console.log(environment.id)

      this.router.navigate(['/menu'])

    },erro=>{
      if(erro.status ==500){
        alert('Usuario ou senha invalido!')
      }

    })
    
  }

}
