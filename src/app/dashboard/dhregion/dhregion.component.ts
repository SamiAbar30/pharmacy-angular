import { ServesappService } from './../../servesapp.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dhregion',
  templateUrl: './dhregion.component.html',
  styleUrls: ['./dhregion.component.scss']
})
export class DhregionComponent implements OnInit {
  regionDialog: boolean;

  Numpi: any;

  exp: any;

  regions: any[];

  region: any;

  selectedregions: any[];

  submitted: boolean;

  statuses: any[];

  constructor(private serice: ServesappService) {

  }
  ngOnInit(): void {
    this.serice.getregionall().subscribe((dep)=> {
      this.regions = dep;
    });
  }

  openNew() {

    this.submitted = false;
    this.regionDialog = true;
    this.exp = true;
    this.region = {};
    this.Numpi = 0;
  }

  edit(val: any) {

      this.region = val;
      this.regionDialog = true;
      this.exp = true;
      this.Numpi = 1;


  }
  delet(val: any) {
    this.serice.deleteregion(val).subscribe();

  }


  hideDialog() {
    this.regionDialog = false;
    this.submitted = false;
  }
}
