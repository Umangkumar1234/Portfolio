import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent implements OnInit {
 
  map: google.maps.Map | undefined;
  constructor(){ }
  ngOnInit(): void {
    this.createMarker();
  }


  display: any;
    center: google.maps.LatLngLiteral = {
        lat: 24,
        lng: 12
    };
    zoom = 4;
    moveMap(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.center = (event.latLng.toJSON());
    }
    move(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.display = event.latLng.toJSON();
    }

    createMarker() {
       var myLatLngList = {
           myLatLng : [{ lat: 37.76487, lng: -122.41948 }, { lat: 59.33555, lng: 18.029851 }]    
           };

         for(const data of myLatLngList.myLatLng){
           var marker = new google.maps.Marker({
               position: data,
               map:this.map,
               title: 'markers'
           });
        }
   };
 }


