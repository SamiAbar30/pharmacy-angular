import { Component, Input, OnInit } from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader";
let map: google.maps.Map;
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  @Input() locations :any[]=[];

  constructor() { }

  ngOnInit(): void {

    const loader = new Loader({
      apiKey: "AIzaSyAAL16T7LJXF5mHCAUq3xKxo8bFTXBrdTM",
      version: "weekly",
    });



    loader.load().then(() => {

     map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: -31.56391, lng: 147.154312 },
        zoom: 3,
      });


    for (let index = 0; index < this.locations.length; index++) {
      new google.maps.Marker({
        position: this.locations[index],
        map: map,
      });

    }

    });








  }

}
