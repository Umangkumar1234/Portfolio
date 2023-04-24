import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../shared/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service: ServiceService,private router:Router) {

  }
  ngOnInit(): void {
   
  }

  signupForm = new FormGroup({
    fname: new FormControl('', [Validators.required,Validators.minLength(3)]),
    lname: new FormControl('', [Validators.required,Validators.minLength(3)]),
    email: new FormControl('', [Validators.required,Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]),
    pass: new FormControl('', [Validators.required])
    

  });
get f(){
  return this.signupForm.controls;
}

  signupDetails(){
    const signUp = this.signupForm.value;
    console.log(signUp); 


    this.service.signupEmployee(this.signupForm.value).subscribe((res: any) => {
      console.log(res);
      alert("Signup Successfull!!");
      this.signupForm.reset();
      this.router.navigate(['login']);
    }
    )
  }
}
