import { ServesappService } from './../../../servesapp.service';
import { Component, Input, OnInit } from '@angular/core';
import { Subscriber, Observable } from 'rxjs';

@Component({
  selector: 'app-cuuser',
  templateUrl: './cuuser.component.html',
  styleUrls: ['./cuuser.component.scss']
})
export class CUuserComponent implements OnInit {
  @Input() item: any={};
  @Input() Numpi: any;
  image1: Observable<any>;
  email: any;
  pass: any;
  selectedCountry: any;
  nickname: any;
  itemimage1:any;
  countries: any[];


  constructor(private serice: ServesappService) {

  }

  ngOnInit(): void {
    this.countries = [
      {name: 'morocco', code: 'MR',image:'assets/flag/mo-flag.gif',key:'-MtYZaqoaapvGnYMyriy'}
  ];


  this.itemimage1 = this.item.value.img_user ?? 'assets/images/68311.jpg';


  this.nickname=this.item.value.nickname;
  this.email=this.item.value.email;
  this.pass=this.item.value.pass;
  }

  addusers(){
    var user = {
      email: this.email,
      pass: this.pass,
      nickname: this.nickname,
      Country:this.selectedCountry.key,
    };
    console.log(user);
    this.serice.signUpadmin(user).subscribe();
  }
  update(){
    var user = {
      email: this.email,
      pass: this.pass,
      nickname: this.nickname,
      Country:this.selectedCountry.key,

    };
    console.log(user);
    this.serice.updatepays(user,this.item.key).subscribe();
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
