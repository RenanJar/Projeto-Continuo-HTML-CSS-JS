import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { Status } from 'src/app/model/Status';
import { StatusService } from 'src/app/service/status.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-status-edit',
  templateUrl: './status-edit.component.html',
  styleUrls: ['./status-edit.component.css']
})
export class StatusEditComponent implements OnInit {

  status: Status = new Status ()

  constructor(
    private statusservice: StatusService,
    private router: Router,
    private route:ActivatedRoute

  ) { }

  ngOnInit(){
    if(environment.token ==''){
      this.router.navigate(['/login'])
    }    

    let id= this.route.snapshot.params['id']

    this.findByidStatus(id)
  }

  findByidStatus(id:number){
    this.statusservice.getByIdstatus(id).subscribe((resp: Status)=>{
      this.status=resp
    })
  }

  atualizar(){
    this.statusservice.putStatus(this.status).subscribe((resp:Status)=>{
      this.status=resp
        alert('Status atualizado com sucesso!')
      this.router.navigate(['/status'])
    })
  }

}
