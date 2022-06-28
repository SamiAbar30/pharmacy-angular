import { ServesappService } from './../../../../servesapp.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss']
})
export class ZoneComponent implements OnInit {
  @Input() id: any;
  Zone:any[];
  constructor(private serice: ServesappService) { }

  ngOnInit(): void {
    this.serice.getzone(this.id).subscribe((dep)=> {
      this.Zone = dep;
    });

  }

}
