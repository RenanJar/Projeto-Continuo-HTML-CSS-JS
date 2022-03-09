import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  nome= environment.nome
  foto= environment.foto

  constructor(

    private router : Router
    ) { }

  ngOnInit():void {

  }

  sair(){
    this.router.navigate(['/login'])

    environment.token=''
    environment.nome=''
    environment.foto=''
    environment.id = 0
  }

}
