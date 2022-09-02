import { Component, OnInit } from '@angular/core';
import { employe } from '../model/employe';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-gett-all',
  templateUrl: './gett-all.component.html',
  styleUrls: ['./gett-all.component.css']
})
export class GettAllComponent implements OnInit {
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
  DeleteEmploye(id:any) {
    
    this.TestService.delete(id).subscribe(
      (data) => {
        this.ALL();
            },
      errors => {
        console.log(errors);
        alert(errors.status);
      },
    );
  }
  check=false;
  data:any;

  FindById(id:any) {
    
    this.TestService.Findbyid(id).subscribe(
      (data) => {
        this.check=true;
        this.data=data;
        if(data.id_role==1)
        {
          data.id_role="Super Admin";
        }
            },
      errors => {
        console.log(errors);
        alert(errors.status);
      },
    );
  }
  Update() {
    
    this.TestService.update(this.data).subscribe(
      (data) => {
       
        this.check=false;
        this.ALL();

            },
      errors => {
        console.log(errors);
        alert(errors.status);
      },
    );
  }
 
}
