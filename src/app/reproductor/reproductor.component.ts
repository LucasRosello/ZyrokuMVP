import { Component, OnInit } from '@angular/core';
import { ClasesService } from '../servicios/clases/clases.service';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {

  clase = new Object()

  constructor(public clasesService:ClasesService) { 
    this.getClase(/*id*/)
  }

  getClase(/*id*/) {
    this.clasesService.getClasePorId().subscribe(clase=>{
     this.clase = clase["data"]["clase"];
     console.log(this.clase)
    })
    
  }

  ngOnInit(): void {

    this.cargar();
   
  }

  async cargar(){
    await new Promise( resolve => setTimeout(resolve, 300) );
    this.onResize();
  }

  onResize() {
    document.getElementById("colVideo").style.height = String(document.getElementById("video").offsetHeight + "px")
  }

}
