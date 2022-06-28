import { ServesappService } from './../servesapp.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing',
  templateUrl: './sing.component.html',
  styleUrls: ['./sing.component.scss'],
})
export class SingComponent implements OnInit {
  email: any;
  pass: any;
  pass2: any;
  nickname: any;

  selectedCountry: any;

  countries: any[];
  constructor(private serice: ServesappService, private router: Router) {}

  ngOnInit(): void {


    this.countries = [
      {name: 'morocco', code: 'MR',image:'assets/flag/mo-flag.gif',key:'-MtYZaqoaapvGnYMyriy'}
  ];

  }

  sign() {
    if (this.pass == this.pass2) {
      var user = {
        email: this.email,
        pass: this.pass,
        nickname: this.nickname,

        Country:this.selectedCountry.key,
      };
      console.log(user);
      this.serice.sign(user).subscribe( respons=>{
        if(respons.uid){
          this.router.navigate(['/Login']);
        }

      }

      );

    }
  }
}
