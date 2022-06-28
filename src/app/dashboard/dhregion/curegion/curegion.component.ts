import { ServesappService } from './../../../servesapp.service';
import { Component, Input, OnInit } from '@angular/core';
import { Subscriber, Observable } from 'rxjs';
class map{
  key:any;
  name_paye_fr:any;
  constructor(key:any,name_paye_fr:any){
    this.key=key;
    this.name_paye_fr=name_paye_fr;
  }
}

@Component({
  selector: 'app-curegion',
  templateUrl: './curegion.component.html',
  styleUrls: ['./curegion.component.scss']
})
export class CUregionComponent implements OnInit {
  @Input() item: any={};
  @Input() Numpi: any;
  image1: Observable<any>;
  img_region:any;
  name_region_ar:any;
  name_region_fr:any;
  payes:any[];

  itemimage1: any = '';

  selectedCity: any;

  constructor(private serice: ServesappService) {

  }

  ngOnInit(): void {


    this.serice.getpays().subscribe(
      (dep) => {
      this.payes = dep;

    }
    );
    this.name_region_ar=this.item.value.name_region_ar;
    this.name_region_fr=this.item.value.name_region_fr;

    this.itemimage1 = this.item.img_region ?? 'assets/images/68311.jpg';


  }

  addregions(){
    var region = {
      img_region: this.itemimage1,
      name_region_ar: this.name_region_ar,
      name_region_fr: this.name_region_fr,
      id_payes :this.selectedCity.key,
    };

    this.serice.addregion(region).subscribe();
  }
  update(){
    var region = {
      img_region: this.itemimage1,
      name_region_ar: this.name_region_ar,
      name_region_fr: this.name_region_fr,
      id_payes :this.selectedCity.key,
    };

   this.serice.updateregion(region,this.item.key).subscribe();
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
