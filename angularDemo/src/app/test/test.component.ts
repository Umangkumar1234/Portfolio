import { Component } from '@angular/core';
import { EmployeeModule } from '../Model/employee/employee.module';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
constructor(){
let obj=new EmployeeModule();
 console.log(obj.name="Umang");
 obj.roll=70;
 obj.address="Ahmedabad ,gujrat 360003";
 obj.salary=50000;
}

  address:string="I am living in ahmedabad ";
  name:string="Umang kumar";
  Disable:boolean=true;
  name1: number =0;
  thnk:string="";

  public arrays:string[]=['Umang','Shivam','Rishik','Kundan','Indal'];
  onclick(){
    // this.address="Thank you guys";
      this.thnk="Thank You Guys";
  }

 


}
