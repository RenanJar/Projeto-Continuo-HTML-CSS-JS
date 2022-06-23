import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Status } from '../model/Status';
import { StatusService } from '../service/status.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  status:Status = new Status ()
  listastatus:Status[]

  constructor(
    private router:Router,
    private statusservice:StatusService
  ) { }

  ngOnInit(){

    if(environment.token==''){
      this.router.navigate(['/login'])
    }

    this.findAllstatus()
  }

  findAllstatus(){
    this.statusservice.getAllstatus().subscribe((resp:Status[])=>{
      this.listastatus=resp
    })
  }

  cadastrar(){
    this.statusservice.postStatus(this.status).subscribe((resp: Status)=>{
      this.status=resp
      alert('Status cadastrado com sucesso!')
      this.findAllstatus()
      this.status=new Status()
    })
  }

}
