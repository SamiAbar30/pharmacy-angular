import { ServesappService } from './../../servesapp.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dhuser',
  templateUrl: './dhuser.component.html',
  styleUrls: ['./dhuser.component.scss']
})
export class DhuserComponent implements OnInit {
  userDialog: boolean;
  Numpi: any;
  exp: any;

  users: any[];

  user: any;

  selectedusers: any[];

  submitted: boolean;

  statuses: any[];


  constructor(private serice: ServesappService) {

  }
  ngOnInit(): void {
    this.serice.getusers().subscribe((dep)=> {
      this.users = dep;
    });
  }

  openNew() {
    this.submitted = false;
    this.userDialog = true;
    this.exp = true;
    this.user = {};
    this.Numpi = 0;
  }

  edit(val: any) {
      this.user = val;
      this.userDialog = true;
      this.exp = true;
      this.Numpi = 1;

  }
  delet(val: any) {
    this.serice.deleteuser(val).subscribe();

  }


  hideDialog() {
    this.userDialog = false;
    this.submitted = false;
  }
}
