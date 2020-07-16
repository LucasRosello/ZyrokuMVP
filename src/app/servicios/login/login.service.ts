import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loguear(usuario, password)
  {
    return this.http.post('http://192.168.0.11:3000/autenticacion/loguear',{
      usuario: usuario,
      password: password
    });
  }

  registrar(){}
}
