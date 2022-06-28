import { ServesappService } from './../../servesapp.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dhpharmacie',
  templateUrl: './dhpharmacie.component.html',
  styleUrls: ['./dhpharmacie.component.scss']
})
export class DhpharmacieComponent implements OnInit {
  pharmacieDialog: boolean;

  Numpi: any;
  exp: any;
  
  pharmacies: any[];

  pharmacie: any;

  selectedpharmacies: any[];

  submitted: boolean;

  statuses: any[];


  constructor(private serice: ServesappService) {

  }
  ngOnInit(): void {
    this.serice.getpharmacieall().subscribe((dep)=> {
      this.pharmacies = dep;
    });
  }

  openNew() {
    this.submitted = false;
    this.pharmacieDialog = true;
    this.exp = true;
    this.pharmacie = {};
    this.Numpi = 0;

}


edit(val: any) {
  this.pharmacie = val;
  this.pharmacieDialog = true;
  this.exp = true;
  this.Numpi = 1;

}
delet(val: any) {
  this.serice.deletepharmacie(val).subscribe();

}


hideDialog() {
    this.pharmacieDialog = false;
    this.submitted = false;
}

}
