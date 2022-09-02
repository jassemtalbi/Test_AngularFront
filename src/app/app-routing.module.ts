import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeComponent } from './add-employe/add-employe.component';
import { AddNewEmployeAdminComponent } from './add-new-employe-admin/add-new-employe-admin.component';
import { AddNewEmployeComponent } from './add-new-employe/add-new-employe.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { GettAllComponent } from './gett-all/gett-all.component';
import { LoginComponent } from './login/login.component';
import { UserPageComponent } from './user-page/user-page.component';

const routes: Routes = [
  {
    path:'ALL',component:GettAllComponent
  },
  {
    path:'Register',component:AddEmployeComponent
  },
  {
    path:'Login',component:LoginComponent
  },
  {
    path:'Admin',component:AdminPageComponent
  },
  {
    path:'User',component:UserPageComponent
  },
  {
    path:'AddEmploye',component:AddNewEmployeComponent
  },
  {
    path:'AddEmployeAdmin',component:AddNewEmployeAdminComponent
  },
  {
    path:'',component:AddEmployeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
