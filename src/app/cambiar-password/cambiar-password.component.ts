import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servicios/login/login.service';
import { ActivatedRoute } from '@angular/router';

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
  

  constructor(
    public loginService:LoginService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      const token = params["token"].toString();
      localStorage.setItem('token', token);
    });

    
  }

  changePassword(){
    if(this.password != this.passwordRepeat) {
      this.error = true
      this.mensaje = "Las contraseñas no coinciden"
      //pasar esto a formularios dinamicos
    } else {
      this.loginService.cambiarPass(this.password).subscribe(response=>{
        if(response["data"])
        {
          window.location.href = '/loguear'
        }
      });
    }


  }

}
