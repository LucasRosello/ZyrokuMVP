import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {

  constructor() { 
    
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
