import { Observable, Subscriber } from 'rxjs';
import { ServesappService } from './../../../servesapp.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cupayes',
  templateUrl: './cupayes.component.html',
  styleUrls: ['./cupayes.component.scss']
})
export class CUpayesComponent implements OnInit {
  @Input() item: any={};
  @Input() Numpi: any;
  image1: Observable<any>;
  img_paye:any;
  name_paye_ar:any;
  name_paye_fr:any;
  itemimage1: any = 'assets/images/68311.jpg';
  constructor(private serice: ServesappService) {

  }

  ngOnInit(): void {
    this.itemimage1 = this.item.value.img_paye??'assets/images/68311.jpg';
    this.name_paye_ar=this.item.value.name_paye_ar;
    this.name_paye_fr=this.item.value.name_paye_fr;
  }

  addpayes(){
    var paye = {
      img_paye: this.itemimage1,
      name_paye_ar: this.name_paye_ar,
      name_paye_fr: this.name_paye_fr,

    };
  this.serice.addpays(paye).subscribe();
  }
  update(){
    var paye = {
      img_paye: this.itemimage1,
      name_paye_ar: this.name_paye_ar,
      name_paye_fr: this.name_paye_fr,
    };
    this.serice.updatepays(paye,this.item.key).subscribe();
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
