import { ServesappService } from './../../../servesapp.service';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-Region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
})
export class RegionComponent implements OnInit {
  region: any[];



  constructor(private serice: ServesappService) {

  }

  ngOnInit() {
  this.serice.getregion('-MtYZaqoaapvGnYMyriy').subscribe((dep)=> {
    this.region = dep;
  });

  }



}
