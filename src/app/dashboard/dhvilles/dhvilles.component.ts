import { ServesappService } from './../../servesapp.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dhvilles',
  templateUrl: './dhvilles.component.html',
  styleUrls: ['./dhvilles.component.scss']
})
export class DhvillesComponent implements OnInit {
  villeDialog: boolean;
  Numpi: any;
  exp: any;

  villes: any[];

  ville: any;

  selectedvilles: any[];

  submitted: boolean;

  statuses: any[];

  constructor(private serice: ServesappService) {

  }
  ngOnInit(): void {
    this.serice.getvilleall().subscribe((dep)=> {
      this.villes = dep;
    });
  }

  openNew() {
    this.submitted = false;
    this.villeDialog = true;
    this.exp = true;
    this.ville = {};
    this.Numpi = 0;
  }

  edit(val: any) {
      this.ville = val;
      this.villeDialog = true;
      this.exp = true;
      this.Numpi = 1;

  }
  delet(val: any) {
    this.serice.deleteville(val).subscribe();

  }


  hideDialog() {
    this.villeDialog = false;
    this.submitted = false;
  }
}
