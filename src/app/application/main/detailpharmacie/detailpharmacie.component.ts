import { ServesappService } from './../../../servesapp.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

class map{
  lat:any;
  lng:any;
  constructor(lat:any,lng:any){
    this.lat=lat;
    this.lng=lng;
  }
}

@Component({
  selector: 'app-detailpharmacie',
  templateUrl: './detailpharmacie.component.html',
  styleUrls: ['./detailpharmacie.component.scss']
})
export class DetailpharmacieComponent implements OnInit {
  detail:any={};
  locations:any[]=[];

  validation:any=false;
  constructor(private serice: ServesappService,private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {

    this.serice.getdetail(this._Activatedroute.snapshot.paramMap.get("id")).subscribe((dep)=> {
      this.detail = dep;
this.locations=[new map(this.detail.latitude_pharmacie,this.detail.longitude_pharmacie)];

      this.validation=true;
    });


  }

}
