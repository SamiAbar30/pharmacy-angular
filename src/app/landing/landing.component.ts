import { ServesappService } from './../servesapp.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private serice: ServesappService) { }
  login:any ;

  selectedCountry: any;

  countries: any[];
  ngOnInit(): void {

    this.countries = [
      {name: 'morocco', code: 'MR',image:'assets/flag/mo-flag.gif'}
  ];
  this.serice.Check(localStorage.getItem('idToken')).subscribe((dep)=> {
    this.login= dep;
  });

  }

}
