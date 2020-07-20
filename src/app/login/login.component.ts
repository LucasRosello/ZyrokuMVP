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
  error = true
  mensaje = "error"

  constructor(public loginService:LoginService) { }

  ngOnInit(): void {
  }

  loguear() {
    try {
      this.loginService.loguear(this.usuario, this.password).subscribe(response=>{
        console.log(response)
        if(response["data"])
        {
          localStorage.setItem('token', response["data"]["token"])
        }
        else
        {
          this.error = true
          switch (response["status"]) {
            
            case "not_found":
              this.mensaje = "Usuario no encontrado"
              break;
            
            case "wrong_password":
              this.mensaje = "contraseña incorrecta"
              break;

            default:
              console.log("fatal")
              break;
          }
        }

      })
    }
    catch{
      console.log("error")
    }
  }

}
