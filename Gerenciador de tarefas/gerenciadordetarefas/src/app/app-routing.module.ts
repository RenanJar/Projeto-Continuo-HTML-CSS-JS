import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatusDeleteComponent } from './delete/status-delete/status-delete.component';
import { StatusEditComponent } from './edit/status-edit/status-edit.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { Status } from './model/Status';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path: 'cadastrar', component:CadastroComponent},
  {path:'menu', component:MenuComponent},
  {path:'status', component:StatusComponent},
  {path:'status-edit/:id',component: StatusEditComponent},
  {path:'status-delete/:id',component:StatusDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
