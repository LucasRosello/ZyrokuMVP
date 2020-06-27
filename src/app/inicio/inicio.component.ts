import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  arrayNoticias = [
    {
      destacado: false,
      _id: "5ef421c5d4e37b3f448a5ee8",
      verificado: false,
      titulo: "ay caramba",
      descripcion: "esto es traido a ustedes por buzz cola",
      link: "https://www.google.com",
      __v: 0
    },
    {
      destacado: false,
      _id: "5ef421c5d4e37b3f448a5ee8",
      verificado: false,
      titulo: "ay caramba",
      descripcion: "esto es traido a ustedes por buzz cola",
      link: "https://www.google.com",
      __v: 0
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
