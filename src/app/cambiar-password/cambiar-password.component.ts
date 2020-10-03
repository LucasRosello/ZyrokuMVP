import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.component.html',
  styleUrls: ['./cambiar-password.component.css']
})
export class CambiarPasswordComponent implements OnInit {

  password = ""
  passwordRepeat = ""
  error = null
  mensaje = ""
  clicked = false
  

  constructor(public registrarService:RegistrarService) { }

  ngOnInit(): void {
  }

  changePassword(){
    if(this.password != this.passwordRepeat) {
      this.error = true
      this.mensaje = "Las contraseñas no coinciden"
    } else {
      // this.registrarService.registrar(this.password).subscribe(response=>{
      //   if(response["data"])
      //   {
      //     // localStorage.setItem('token', response["data"]["token"])
      //     // localStorage.setItem('email', response["data"]["email"])
      //     window.location.href = '/loguear'
      //   }
      // });
    }


  }

}
