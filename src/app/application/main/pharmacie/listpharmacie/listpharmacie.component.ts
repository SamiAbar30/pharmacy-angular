import { ServesappService } from './../../../../servesapp.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listpharmacie',
  templateUrl: './listpharmacie.component.html',
  styleUrls: ['./listpharmacie.component.scss']
})
export class ListpharmacieComponent implements OnInit {

  @Input() statut:any;
  @Input() Zone:any[];

  constructor() { }

  ngOnInit(): void {
  }

}
