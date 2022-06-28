import { ServesappService } from './../../../servesapp.service';
import { Component, Input, OnInit } from '@angular/core';
import { Subscriber, Observable } from 'rxjs';

@Component({
  selector: 'app-cuville',
  templateUrl: './cuville.component.html',
  styleUrls: ['./cuville.component.scss']
})
export class CUvilleComponent implements OnInit {
  @Input() item: any={};
  @Input() Numpi: any;
  image1: Observable<any>;
  img_ville:any;
  name_ville_ar:any;
  name_ville_fr:any;
  regions:any[];
  itemimage1: any = '';

  selectedCity: any;
  constructor(private serice: ServesappService) {

  }

  ngOnInit(): void {
    this.serice.getregionall().subscribe(
      (dep) => {
      this.regions = dep;

    }
    );
    this.name_ville_ar=this.item.value.name_ville_ar;
    this.name_ville_fr=this.item.value.name_ville_fr;

    this.itemimage1 = this.item.img_ville ?? 'assets/images/68311.jpg';

  }

  addvilles(){
    var ville = {
      img_ville: this.itemimage1,
      name_ville_ar: this.name_ville_ar,
      name_ville_fr: this.name_ville_fr,
      id_region :this.selectedCity.key,

    };

   this.serice.addville(ville).subscribe();
  }
  update(){
    var ville = {
      img_ville: this.itemimage1,
      name_ville_ar: this.name_ville_ar,
      name_ville_fr: this.name_ville_fr,
      id_region :this.selectedCity.key,
    };

   this.serice.updateville(ville,this.item.key).subscribe();
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
