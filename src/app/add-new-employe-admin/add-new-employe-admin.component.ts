import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TestService } from '../services/test.service';
@Component({
  selector: 'app-add-new-employe-admin',
  templateUrl: './add-new-employe-admin.component.html',
  styleUrls: ['./add-new-employe-admin.component.css']
})
export class AddNewEmployeAdminComponent implements OnInit {

  constructor(private TestService: TestService,private route:Router) { }
  ngOnInit(): void {
  }
  AddEmploye(form: NgForm) {
    const value = form.value;

    this.TestService.AddEmploye(value.userName,value.email,value.password,value.rpassword,value.id_Department,value.id_role).subscribe(
      (data) => {
      
          console.log(data);
          this.route.navigate(['/Admin']); // navigate to other page
          
      },
      errors => {
        console.log(errors);
   
      },
    )
    ;
  }
}
