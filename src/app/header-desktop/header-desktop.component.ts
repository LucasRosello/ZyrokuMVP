import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //ROUTING

@Component({
  selector: 'app-header-desktop',
  templateUrl: './header-desktop.component.html',
  styleUrls: ['./header-desktop.component.css']
})
export class HeaderDesktopComponent implements OnInit {

  email = localStorage.getItem("email")
  tokenExists = true //if(localStorage.getItem("token")){ return true };

  constructor(private router: Router) { } //ROUTING

  ngOnInit(): void {
    
  }

  cerrarSesion(){
    this.email = null
    this.tokenExists = false
    localStorage.clear()
    this.router.navigate(['/']); //ROUTING
  }

}
