import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GettAllComponent } from './gett-all/gett-all.component';
import { AddEmployeComponent } from './add-employe/add-employe.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { AddNewEmployeComponent } from './add-new-employe/add-new-employe.component';
import { AddNewEmployeAdminComponent } from './add-new-employe-admin/add-new-employe-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    GettAllComponent,
    AddEmployeComponent,
    LoginComponent,
    AdminPageComponent,
    UserPageComponent,
    AddNewEmployeComponent,
    AddNewEmployeAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
