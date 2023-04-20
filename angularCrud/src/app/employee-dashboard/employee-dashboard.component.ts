import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from '../shared/service.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})

// export class student{
//   constructor(
//     public fName!:string,
//     public lName!:string,
//     public emailID!:string,
//     public mobNo!:string,
//     public salary!:string
// ){}

// }

export class EmployeeDashboardComponent implements OnInit {
  employeeData: any;
  status: any;
  constructor(private service: ServiceService) {

  }
  ngOnInit(): void {
    this.getAllEmployee();

  }

  employeeForm = new FormGroup({
    fName: new FormControl('', [Validators.required],),
    lName: new FormControl('', [Validators.required]),
    emailID: new FormControl('', [Validators.required]),
    mobNo: new FormControl('', [Validators.required]),
    salary: new FormControl('', [Validators.required]),

  });



  postEmployeeDetails() {

    const signUp = this.employeeForm.value;
    console.log(signUp);


    this.service.postEmployee(this.employeeForm.value).subscribe((res: any) => {
      console.log(res);
      alert("Employee added Successfully");
    }
    )
  }

  getAllEmployee() {
    this.service.getEmployee().subscribe((res: any) => {
      this.employeeData = res;
      console.log(this.employeeData)
    })
  }

  delEmployee(row:number) {
   
    this.service.deleteEmployee(row).subscribe(() => { 

     alert("Employee data deleted");
     }
)
  }




}
