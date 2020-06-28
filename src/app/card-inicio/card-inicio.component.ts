import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-inicio',
  templateUrl: './card-inicio.component.html',
  styleUrls: ['./card-inicio.component.css']
})
export class CardInicioComponent implements OnInit {
  
  @Input()
  itemNoticia
  
  titulo = ""
  descripcion = ""
  link = ""
  destacado = false;

  constructor() {
  }

  ngOnInit(): void {
    this.titulo = this.itemNoticia["titulo"]
    this.descripcion = this.itemNoticia["descripcion"]
    this.link = this.itemNoticia["link"]
    this.destacado = this.itemNoticia["destacado"];
  }

  

}
