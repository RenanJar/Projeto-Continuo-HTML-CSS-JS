import { Component } from '@angular/core';
import  {  faCoffee  }  from '@fortawesome/free-solid-svg-icons' ;
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gerenciadordetarefas';
  faCoffee = faCoffee;

  constructor(
    public auth: AuthService
  ){}
}
