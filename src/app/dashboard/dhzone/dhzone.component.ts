import { ServesappService } from './../../servesapp.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dhzone',
  templateUrl: './dhzone.component.html',
  styleUrls: ['./dhzone.component.scss']
})
export class DhzoneComponent implements OnInit {
  zoneDialog: boolean;
  Numpi: any;
  exp: any;

  zones: any[];

  zone: any;

  selectedzones: any[];

  submitted: boolean;

  statuses: any[];


  constructor(private serice: ServesappService) {

  }
  ngOnInit(): void {
    this.serice.getzoneall().subscribe((dep)=> {
      this.zones = dep;
    });
  }
  openNew() {
    this.submitted = false;
    this.zoneDialog = true;
    this.exp = true;
    this.zone = {};
    this.Numpi = 0;
  }

  edit(val: any) {
      this.zone = val;
      this.zoneDialog = true;
      this.exp = true;
      this.Numpi = 1;

  }
  delet(val: any) {
    this.serice.deletezone(val).subscribe();

  }


  hideDialog() {
    this.zoneDialog = false;
    this.submitted = false;
  }
}
