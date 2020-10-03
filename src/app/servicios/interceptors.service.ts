import { Injectable } from '@angular/core'
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http'
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class InterceptorsService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const token = localStorage.getItem('token');
    
    if (!token) {
      return next.handle(req);
    }
    
    const headers = req.clone({
      headers: req.headers.set('x-access-token', `${token}`)
    });
    
    return next.handle(headers);
  }
}
