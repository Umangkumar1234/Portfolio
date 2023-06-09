import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../shared/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private service: ServiceService,private router:Router) {

  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]),
    pass: new FormControl('', [Validators.required])
    
  });

  get f(){
    return this.loginForm.controls;
  }
  

  login(){
    this.service.getEmployee().subscribe((res: any) => {

      console.log(res);

      const user=res.find((a: any)=>{
          return a.email===this.loginForm.value.email && a.pass===this.loginForm.value.pass
      });
      if(user){
        alert("Login Successfull!!");
        this.loginForm.reset();
        this.router.navigate(['dashboard']);
      }else{
        alert("user not found");
      }
      
    })
  }
}
