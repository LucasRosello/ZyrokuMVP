import { Component, OnInit } from '@angular/core';
import { ClasesService } from '../servicios/clases/clases.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {

  clase = new Object()

  constructor(private route: ActivatedRoute, public clasesService:ClasesService) { 
    
  }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      const id = params["id"].toString();
      this.getClase(id)
    });

    this.cargar();
   
  }

  getClase(id) {
    this.clasesService.getClasePorId(id).subscribe(clase=>{
     this.clase = clase["data"];
     let video = <HTMLVideoElement> document.getElementById("video");
     video.load()
     console.log(this.clase)
    })
    
  }

  async cargar(){
    await new Promise( resolve => setTimeout(resolve, 300) );
    this.onResize();
  }

  onResize() {
    if(this.clase['url'])
    {
      document.getElementById("colVideo").style.height = String(document.getElementById("video").offsetHeight + "px")
    }
  }

}
