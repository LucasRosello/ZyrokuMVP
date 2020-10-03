import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  
  loguear(email, password) {
    let headersClient = new HttpHeaders();
    headersClient.append('Access-Control-Allow-Origin', 'http://localhost:3000');

    return this.http.post('http://localhost:3000/autenticacion/loguear',{
        email: email,
        password: password
      },
      { headers: headersClient }
    );
  }

  generarCambioPass(email){
    let headersClient = new HttpHeaders();
    headersClient.append('Access-Control-Allow-Origin', 'http://localhost:3000');

    return this.http.post('http://localhost:3000/autenticacion/generarCambioPassword',{
        email: email,
      },
      { headers: headersClient }
    );
  }

  cambiarPass(newPassword){
    let headersClient = new HttpHeaders();
    headersClient.append('Access-Control-Allow-Origin', 'http://localhost:3000');

    return this.http.post('http://localhost:3000/autenticacion/cambiarPass',{
        nuevaPass: newPassword,
      },
      { headers: headersClient }
    );
  }

}
