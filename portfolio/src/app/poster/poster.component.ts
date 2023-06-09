import { Component, OnInit, HostBinding } from '@angular/core';
import {BreakpointObserver,Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css'],

})
export class PosterComponent implements OnInit {

  constructor(private breakpointObserver:BreakpointObserver){}
  ngOnInit(): void {
    
  
  }


}
