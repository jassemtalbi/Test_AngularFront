import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.css']
})
export class AddEmployeComponent implements OnInit {

  constructor(private TestService: TestService,private route:Router) { }
  ngOnInit(): void {
  }
  AddEmploye(form: NgForm) {
    const value = form.value;

    this.TestService.AddEmploye(value.userName,value.email,value.password,value.rpassword,value.id_Department,value.id_role).subscribe(
      (data) => {
      
          console.log(data);
          this.route.navigate(['/Login']); // navigate to other page
          
      },
      errors => {
        console.log(errors);
   
      },
    )
    ;
  }
}
