import { Component, OnInit } from '@angular/core';
import { employe } from '../model/employe';
import { TestService } from '../services/test.service';
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  ListAll:any;

  constructor(private TestService: TestService) { }
  ngOnInit(): void {
    this.ALL();
  }
  ALL() {
    
    this.TestService.getALL().subscribe(
      (data) => {
        console.log(data)
        this.ListAll=(data);

            },
      errors => {
        console.log(errors);
        alert(errors.status);
      },
    );
  }
 
  
 
}
