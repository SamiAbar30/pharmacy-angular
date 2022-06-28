import { ServesappService } from './../../../servesapp.service';
import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';import { ActivatedRoute } from '@angular/router';
;

class map{
  lat:any;
  lng:any;
  constructor(lat:any,lng:any){
    this.lat=lat;
    this.lng=lng;
  }
}

@Component({
  selector: 'app-pharmacie',
  templateUrl: './pharmacie.component.html',
  styleUrls: ['./pharmacie.component.scss']
})
export class PharmacieComponent implements OnInit {
  statut:any='GARDE DE JOUR';
   Zone:any[];

  items: MenuItem[]=[];
  locations:any[]=[];
validation:any=false;
  activeItem: MenuItem={};

  constructor(private serice: ServesappService,private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.items = [
      {label: 'GARDE DE JOUR'},
      {label: 'GARDE DE NUIT'},
      {label: 'GARDE 24/24'},

  ];

    this.serice.getpharmacie(this._Activatedroute.snapshot.paramMap.get("id")).subscribe((dep)=> {
      this.Zone = dep;

    this.Zone.forEach(element => {
      this.locations.push(new map(element.value.latitude_pharmacie,element.value.longitude_pharmacie));
   });
   this.validation=true;
    });


  }
onclickstatut(stat:any){
  this.statut=stat;
}




}
