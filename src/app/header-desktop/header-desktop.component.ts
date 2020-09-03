import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-desktop',
  templateUrl: './header-desktop.component.html',
  styleUrls: ['./header-desktop.component.css']
})
export class HeaderDesktopComponent implements OnInit {

  usuario = localStorage.getItem("usuario")
  tokenExists = true //if(localStorage.getItem("token")){ return true };

  constructor() { }

  ngOnInit(): void {
    
  }

}
