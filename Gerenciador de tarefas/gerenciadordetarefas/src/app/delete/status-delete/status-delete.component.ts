import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Status } from 'src/app/model/Status';
import { StatusService } from 'src/app/service/status.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-status-delete',
  templateUrl: './status-delete.component.html',
  styleUrls: ['./status-delete.component.css']
})
export class StatusDeleteComponent implements OnInit {
  status: Status= new Status()
  idstatus: number

  constructor(
    private statusService: StatusService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      this.router.navigate(['/login'])
    }

    this.idstatus = this.route.snapshot.params['id']
    this.findByIdStatus(this.idstatus)

  }

  findByIdStatus(id: number){
    this.statusService.getByIdstatus(id).subscribe((resp: Status)=>{
      this.status= resp
    })
  }

  apagar(){
    this.statusService.deleteStatus(this.idstatus).subscribe(()=>{
      alert('Tema apagado com sucesso!')
      this.router.navigate(['/status'])
    })
  }

}
