import { ServesappService } from './../../../servesapp.service';
import { Component, Input, OnInit } from '@angular/core';
import { Subscriber, Observable } from 'rxjs';

@Component({
  selector: 'app-cuzone',
  templateUrl: './cuzone.component.html',
  styleUrls: ['./cuzone.component.scss']
})
export class CUzoneComponent implements OnInit {

  @Input() item: any={};
  @Input() Numpi: any;
  image1: Observable<any>;
  img_zone:any;
  name_zone_ar:any;
  name_zone_fr:any;
  itemimage1: any = '';
  villes:any[];
  selectedCity: any;
  constructor(private serice: ServesappService) {

  }

  ngOnInit(): void {
    this.serice.getvilleall().subscribe(
      (dep) => {
      this.villes = dep;

    }
    );
    this.name_zone_ar=this.item.value.name_zone_ar;
    this.name_zone_fr=this.item.value.name_zone_fr;

    this.itemimage1 = this.item.img_zone ?? 'assets/images/68311.jpg';

  }

  addzones(){


    var zone = {
      img_zone: this.itemimage1,
      name_zone_ar: this.name_zone_ar,
      name_zone_fr: this.name_zone_fr,
      id_ville :this.selectedCity.key,
    };
 
    this.serice.addzone(zone).subscribe();
  }
  update(){
    var zone = {
      img_zone: this.itemimage1,
      name_zone_ar: this.name_zone_ar,
      name_zone_fr: this.name_zone_fr,
      id_ville :this.selectedCity.key,
    };

    this.serice.updatezone(zone,this.item.key).subscribe();
  }

  async onimage1($event: any) {
    var file = $event.target.files[0];
    this.image1 = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    await this.image1.subscribe((x) => {
      this.itemimage1 = x;
    });
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);

    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    };
    filereader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    };
  }

}
