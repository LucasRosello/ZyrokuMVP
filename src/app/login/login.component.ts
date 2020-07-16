import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servicios/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = ""
  password = ""

  constructor(public loginService:LoginService) { }

  ngOnInit(): void {
  }

  loguear() {

    // console.log(this.usuario, this.pass)
    this.loginService.loguear(this.usuario, this.password).subscribe(response=>{
      console.log(response)
    })
   
  }

}
