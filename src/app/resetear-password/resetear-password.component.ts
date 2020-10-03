import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servicios/login/login.service';

@Component({
  selector: 'app-resetear-password',
  templateUrl: './resetear-password.component.html',
  styleUrls: ['./resetear-password.component.css']
})
export class ResetearPasswordComponent implements OnInit {

  email = ""
  error = null
  mensaje = ""
  clicked = false

  constructor(public loginService:LoginService) { }

  ngOnInit(): void {
  }

  resetPassword(){
    this.loginService.generarCambioPass(this.email).subscribe(response=>{
      if(response["data"])
      {
        this.mensaje = "Te enviamos un mail con las instrucciones para recoperar tu password"
        this.error = true //esto es caca
      }
    })
  }

}
