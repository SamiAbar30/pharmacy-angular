import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigationlogin',
  templateUrl: './navigationlogin.component.html',
  styleUrls: ['./navigationlogin.component.scss']
})
export class NavigationloginComponent implements OnInit {
  hiddenul?:boolean=true;
  hiddenul2?:boolean=true;
  constructor() { }

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
}
