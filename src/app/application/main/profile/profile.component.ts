import { ServesappService } from './../../../servesapp.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  email: any;
  pass: any;
  pass2: any;
  nickname: any;
  user:any;
  selectedCountry: any;

  countries: any[];
  constructor(private serice: ServesappService) {}

  ngOnInit(): void {


    this.countries = [
      {name: 'morocco', code: 'MR',image:'assets/flag/mo-flag.gif'}
  ];
  

  }



}
