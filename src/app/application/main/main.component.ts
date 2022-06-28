import { ServesappService } from './../../servesapp.service';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private serice: ServesappService) {}
  login:any ;
  ngOnInit(): void {
    this.serice.Check(localStorage.getItem('idToken')).subscribe((dep)=> {
      this.login= dep;
    });

  }
}
