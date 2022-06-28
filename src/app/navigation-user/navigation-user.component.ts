import { ServesappService } from './../servesapp.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-user',
  templateUrl: './navigation-user.component.html',
  styleUrls: ['./navigation-user.component.scss']
})
export class NavigationUserComponent implements OnInit {
  hiddenul?:boolean=true;
  hiddenul2?:boolean=true;
  constructor(private serice: ServesappService,private router: Router) { }

  ngOnInit(): void {
  }
  displauluser()
  {
  this.hiddenul=!this.hiddenul;
  }
  displauluser2()
  {
  this.hiddenul2=!this.hiddenul2;
  }
  disconnect(){
    this.serice.signout(localStorage.getItem('firebaseUserId'));
    localStorage.clear();
    location.reload();
  }
}
