import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  constructor(private http: HttpClient) { }


  registrar(email, password)
  {
    

    let headersClient = new HttpHeaders();
    headersClient.append('Access-Control-Allow-Origin', 'http://localhost:3000');

    return this.http.post('http://localhost:3000/autenticacion/registrar',{
        email: email,
        password: password
      },
      {headers: headersClient}
    );
    

  }
}
