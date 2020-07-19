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
    try {
      this.loginService.loguear(this.usuario, this.password).subscribe(response=>{
        
        if(response["data"]["token"])
        {
          localStorage.setItem('token', response["data"]["token"])
        }
      })
    }
    catch{
      console.log("error")
    }
  }

}
