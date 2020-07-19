import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loguear(usuario, password)
  {
    console.log("llego al service"+usuario+password)

    let headersClient = new HttpHeaders();
    headersClient.append('Access-Control-Allow-Origin', 'http://localhost:3000');

    return this.http.post('http://localhost:3000/autenticacion/loguear',{
        usuario: usuario,
        password: password
      },
      {headers: headersClient}
    );
  }

  registrar(){}
}
