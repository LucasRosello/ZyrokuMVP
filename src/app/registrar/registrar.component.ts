import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  email = ""
  password = ""
  error = false
  mensaje = "error"
  clicked = false

  constructor() { }

  ngOnInit(): void {
  }

}
