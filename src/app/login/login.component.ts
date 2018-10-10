import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  loginDetails = {
    email : '',
    password :''
  }

  login(){
    console.log(this.loginDetails)
    this.auth.login(this.loginDetails) {

    }

  }



  ngOnInit() {
  }

}
