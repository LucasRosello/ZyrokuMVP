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
      }

      this.registrarService.registrar(this.email, this.password).subscribe(response=>{
        console.log(response)
        console.log("asdas")
        //NO LLEGA RESPUESTA
      });

    } catch {
      console.log("error")
    }
  }

}
