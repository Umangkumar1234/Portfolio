import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from '../shared/service.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})



export class EmployeeDashboardComponent implements OnInit {
  employeeData: any;
  dodisplay=true;
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
      
      this.employeeForm.reset();
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
   debugger
    this.service.deleteEmployee(row).subscribe(() => { 

     alert("Employee data deleted");
     this.getAllEmployee();
     }
)
  }

  onEdit(row:any){
    this.employeeData.id=row.id;
    this.employeeForm.controls['fName'].setValue(row.fName);
    this.employeeForm.controls['lName'].setValue(row.lName);
    this.employeeForm.controls['emailID'].setValue(row.emailID);
    this.employeeForm.controls['mobNo'].setValue(row.mobNo);
    this.employeeForm.controls['salary'].setValue(row.salary);


  }
  updateEmployeeDetails(){
  
    // this.employeeData.fName=this.employeeForm.value.fName;
    // this.employeeData.lName=this.employeeForm.value.lName;
    // this.employeeData.emailID=this.employeeForm.value.emailID;
    // this.employeeData.mobNo=this.employeeForm.value.mobNo;
    // this.employeeData.salary=this.employeeForm.value.salary;

  
    this.service.updateEmployee(this.employeeData, this.employeeData.id).subscribe(res=>{
      console.log(res);
      alert("Updated Successfully");
      this.getAllEmployee();
    })
  }


  display(){
    this.dodisplay=false;
    this.employeeForm.reset();
    
  }
  Editdisplay(){
    this.dodisplay=true;
   
  }

}
