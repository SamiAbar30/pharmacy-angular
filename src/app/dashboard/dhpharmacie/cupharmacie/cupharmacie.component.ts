import { ServesappService } from './../../../servesapp.service';
import { Component, Input, OnInit } from '@angular/core';
import { Subscriber, Observable } from 'rxjs';

@Component({
  selector: 'app-cupharmacie',
  templateUrl: './cupharmacie.component.html',
  styleUrls: ['./cupharmacie.component.scss'],
})
export class CUpharmacieComponent implements OnInit {
  @Input() item: any = {};
  @Input() Numpi: any;
  image1: Observable<any>;
  img_pharmacie: any;

  zone: any[];
  itemimage1: any = '';

  selectedCity: any;

  name_pharmacie: any;
  adresse_pharmacie: any;
  tel_pharmacie: any;
  latitude_pharmacie: any;
  longitude_pharmacie: any;
  staut_pharmacie: any;
  id_zone: any;
  Date_Debut_pharmacie: any;
  Date_Fin_pharmacie: any;
  stars: 5;
  constructor(private serice: ServesappService) {}

  ngOnInit(): void {
    this.serice.getzoneall().subscribe((dep) => {
      this.zone = dep;
    });
    this.itemimage1 =
      this.item.value.img_pharmacie ?? 'assets/images/68311.jpg';
    (this.name_pharmacie = this.item.value.name_pharmacie),
      (this.adresse_pharmacie = this.item.value.adresse_pharmacie),
      (this.tel_pharmacie = this.item.value.tel_pharmacie),
      (this.latitude_pharmacie = this.item.value.latitude_pharmacie),
      (this.longitude_pharmacie = this.item.value.longitude_pharmacie),
      (this.img_pharmacie = this.item.value.itemimage1),
      (this.staut_pharmacie = this.item.value.staut_pharmacie),
      (this.id_zone = this.selectedCity.key),
      (this.Date_Debut_pharmacie = this.item.value.Date_Debut_pharmacie),
      (this.Date_Fin_pharmacie = this.item.value.Date_Fin_pharmacie),
      (this.stars = this.item.value.stars);
  }

  addpharmacies() {
    var pharmacie = {
      name_pharmacie: this.name_pharmacie,
      adresse_pharmacie: this.adresse_pharmacie,
      tel_pharmacie: this.tel_pharmacie,
      latitude_pharmacie: this.latitude_pharmacie,
      longitude_pharmacie: this.longitude_pharmacie,
      img_pharmacie: this.itemimage1,
      staut_pharmacie: this.staut_pharmacie,
      id_zone: this.selectedCity.key,
      Date_Debut_pharmacie: this.Date_Debut_pharmacie,
      Date_Fin_pharmacie: this.Date_Fin_pharmacie,
      stars: this.stars,
    };

    this.serice.addpharmacie(pharmacie).subscribe();
  }
  update() {
    var pharmacie = {
      name_pharmacie: this.name_pharmacie,
      adresse_pharmacie: this.adresse_pharmacie,
      tel_pharmacie: this.tel_pharmacie,
      latitude_pharmacie: this.latitude_pharmacie,
      longitude_pharmacie: this.longitude_pharmacie,
      img_pharmacie: this.itemimage1,
      staut_pharmacie: this.staut_pharmacie,
      id_zone: this.selectedCity.key,
      Date_Debut_pharmacie: this.Date_Debut_pharmacie,
      Date_Fin_pharmacie: this.Date_Fin_pharmacie,
      stars: this.stars,
    };

    this.serice.updatepharmacie(pharmacie, this.item.key).subscribe();
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
