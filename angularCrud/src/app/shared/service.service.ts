import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { 

  }

  postEmployee(data:any){
    return this.http.post("http://localhost:3000/posts",data)
    // .pipe(Map)
  }

  getEmployee(){
    return this.http.get("http://localhost:3000/posts")
    // .pipe(Map)
  }

  updateEmployee(data:any,id:number){
    debugger
    return this.http.put("http://localhost:3000/posts/"+id,data);
    // .pipe(Map)
  }

  deleteEmployee(id:number){
   
    return this.http.delete("http://localhost:3000/posts/"+id)
   
    // .pipe(Map)
  }

  signupEmployee(data:any){
    return this.http.post("http://localhost:3000/signup",data)
    // .pipe(Map)
  }

  loginService(){
    return this.http.get("http://localhost:3000/signup");
  }
  isLoggedIn(){
    return !!localStorage.getItem('token');
  }

}
