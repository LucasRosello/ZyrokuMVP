import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //ROUTING

@Component({
  selector: 'app-header-desktop',
  templateUrl: './header-desktop.component.html',
  styleUrls: ['./header-desktop.component.css']
})
export class HeaderDesktopComponent implements OnInit {

  usuario = localStorage.getItem("usuario")
  tokenExists = true //if(localStorage.getItem("token")){ return true };

  constructor(private router: Router) { } //ROUTING

  ngOnInit(): void {
    
  }

  cerrarSesion(){
    this.usuario = null
    this.tokenExists = false
    localStorage.clear()
    this.router.navigate(['/']); //ROUTING
  }

}
