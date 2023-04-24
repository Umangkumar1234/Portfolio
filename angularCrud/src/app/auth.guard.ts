import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from './shared/service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service:ServiceService,private router:Router){}
  canActivate(){
    if(this.service.isLoggedIn()){
      return true;
    }
   this.router.navigate(['login']);
   return false;
  }
  
  
}
