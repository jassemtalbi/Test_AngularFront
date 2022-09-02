import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Employe:any;

  constructor(private TestService: TestService,private route:Router) { }

  ngOnInit(): void {
  }
  Login(form: NgForm) {
    const value = form.value;

    this.TestService.Login(value.userName,value.password).subscribe(
      (data) => {
          console.log(data[0].id_role);
          if(data[0].id_role==1)
          {
            this.route.navigate(['/Admin']); // navigate to other page

          }else{
            this.route.navigate(['/User']); // navigate to other page

          }
      },
      errors => {
        console.log(errors);
   
      },
    )
    ;
  }
}
