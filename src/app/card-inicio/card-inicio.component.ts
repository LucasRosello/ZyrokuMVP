import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../servicios/noticias/noticias.service';

@Component({
  selector: 'app-card-inicio',
  templateUrl: './card-inicio.component.html',
  styleUrls: ['./card-inicio.component.css']
})
export class CardInicioComponent implements OnInit {

  contacts: Observable<Contact[]>;
  arrayNoticias = Observable.of([
    {
      "destacado": false,
      "_id": "5ef421c5d4e37b3f448a5ee8",
      "verificado": false,
      "titulo": "ay caramba",
      "descripcion": "esto es traido a ustedes por buzz cola",
      "link": "https://www.google.com",
      "__v": 0
    },
    {
      "destacado": false,
            "_id": "5ef421fad4e37b3f448a5ee9",
            "verificado": false,
            "titulo": "ay caramba",
            "descripcion": "esto es traido a ustedes por buzz cola",
            "link": "https://www.google.com",
            "__v": 0
    }
  ])
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
    // this.noticiasService.getNoticias().subscribe(noticias=>{
    //   this.arrayNoticias.push(noticias['data'].map(function(noticiaItem) {
    //     return noticiaItem;
    //   }))
    // })
    //dios super ineficiente. No lo logro hacer andar
  }

}
