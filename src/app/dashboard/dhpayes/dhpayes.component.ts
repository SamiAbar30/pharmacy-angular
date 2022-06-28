import { ServesappService } from './../../servesapp.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dhpayes',
  templateUrl: './dhpayes.component.html',
  styleUrls: ['./dhpayes.component.scss'],
})
export class DHpayesComponent implements OnInit {
  payeDialog: boolean;
  Numpi: any;
  payes: any[];
  exp: any;
  paye: any;

  selectedpayes: any[];

  submitted: boolean;

  statuses: any[];

  constructor(private serice: ServesappService) {}
  ngOnInit(): void {
    this.serice.getpays().subscribe((dep) => {
      this.payes = dep;
    });
  }
  openNew() {
    this.paye = {};
    this.submitted = false;
    this.payeDialog = true;
    this.exp = true;
    this.Numpi = 0;
  }

  edit(val: any) {
      this.paye = val;
      this.payeDialog = true;
      this.exp = true;
      this.Numpi = 1;

  }
  delet(val: any) {
    this.serice.deletepays(val).subscribe();

  }


  hideDialog() {
    this.payeDialog = false;
    this.submitted = false;
  }
}
