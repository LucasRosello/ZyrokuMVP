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
  error = false
  mensaje = "error"
  clicked = false

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
          localStorage.setItem('usuario', response["data"]["usuario"])
          window.location.href = '/'

        }
        else
        {
          this.error = true
          switch (response["status"]) {
          
            case "not_found":
              this.mensaje = "Usuario no encontrado"
              break;
            
            case "wrong_password":
              this.mensaje = "Contraseña incorrecta"
              break;

            default:
              this.mensaje = "Ocurrio un error fatal, intente de nuevo, mas tarde"
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
