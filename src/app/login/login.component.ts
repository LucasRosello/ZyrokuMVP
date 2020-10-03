import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servicios/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = ""
  password = ""
  error = false
  mensaje = "error"
  clicked = false

  constructor(public loginService:LoginService) { }

  ngOnInit(): void {
  }

  loguear() {
    try {
      this.loginService.loguear(this.email, this.password).subscribe(response=>{
        //ese subscribe es caca, hay que hacer refactor!!!!
        console.log(response)
        if(response["data"])
        {
          localStorage.setItem('token', response["data"]["token"])
          localStorage.setItem('email', response["data"]["email"])
          window.location.href = '/'
        }
        else
        {
          this.error = true
          // Se puede borrar este switch
          //
          // return res.json({status: "not_found", message: "Usuario no encontrado", data: null});
          // imprimiendo directamente el "message" de la response
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
