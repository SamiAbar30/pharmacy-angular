
import { ServesappService } from './../../../servesapp.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-villes',
  templateUrl: './villes.component.html',
  styleUrls: ['./villes.component.scss']
})
export class VillesComponent implements OnInit {
  Villes: any[];

  constructor(private serice: ServesappService,private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {

    this.serice.getville(this._Activatedroute.snapshot.paramMap.get("id")).subscribe((dep)=> {
      this.Villes = dep;
    });
  }

}
