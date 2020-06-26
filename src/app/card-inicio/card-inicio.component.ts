import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../servicios/noticias/noticias.service';

@Component({
  selector: 'app-card-inicio',
  templateUrl: './card-inicio.component.html',
  styleUrls: ['./card-inicio.component.css']
})
export class CardInicioComponent implements OnInit {

  arrayNoticias
  noticias = {}
  titulo = "Novedades de PHP 7.3"
  descripcion = "Hoy mientras comía me he visto esta charla de Rasmus Lerdorf (el creador de PHP)…"
  link = "https://medium.com/@ger86/novedades-de-php-7-3-9f603f4885e0";
  destacado = false;

  constructor(public noticiasService:NoticiasService) {
     this.getNoticias()
  }

  ngOnInit(): void {
    
  }

  getNoticias() {
    this.noticiasService.getNoticias().subscribe(noticias=>{
      this.arrayNoticias = noticias['data']
    })
    console.log(this.arrayNoticias)
    //no funciona, ver asincronismo
  }

}
