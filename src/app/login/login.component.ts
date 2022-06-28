import { ServesappService } from './../servesapp.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email:any;
  pass:any;


  constructor(private serice: ServesappService,private router: Router) { }

  ngOnInit(): void {
  }

Login(){
 var user={email:this.email,pass:this.pass};
 console.log(user);
  this.serice.Login(user).subscribe((res) =>{
  if(res){
    
    localStorage.setItem('firebaseUserId', res.firebaseUserId);
    localStorage.setItem('idToken',res.idToken);
    this.router.navigate(['/Application/Main/Region']);
  }
  });


}

}
