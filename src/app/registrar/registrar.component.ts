import { Component, OnInit } from '@angular/core';
import { RegistrarService } from '../servicios/registrar/registrar.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  email = ""
  password = ""
  error = false
  mensaje = "error"
  clicked = false
  passwordRepeat = ""

  constructor(public registrarService:RegistrarService) { }

  ngOnInit(): void {
  }

  registrar(){
    try{

      if(this.password != this.passwordRepeat) {
        this.error = true
        this.mensaje = "Las contraseñas no coinciden"
      } else {
        this.registrarService.registrar(this.email, this.password).subscribe(response=>{
          if(response["data"])
          {
            // localStorage.setItem('token', response["data"]["token"])
            // localStorage.setItem('email', response["data"]["email"])
            window.location.href = '/loguear'
          }
        });
      }
    } catch {
      console.log("error")
    }
  }

}
