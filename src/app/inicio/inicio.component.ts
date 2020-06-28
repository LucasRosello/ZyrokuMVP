import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../servicios/noticias/noticias.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  arrayNoticias = new Object()

  constructor(public noticiasService:NoticiasService) { 
    this.getNoticias()
  }

  ngOnInit(): void {
  }

  getNoticias() {
    this.noticiasService.getNoticias().subscribe(noticia=>{
     this.arrayNoticias = noticia["data"];
    })
   
  }

}
