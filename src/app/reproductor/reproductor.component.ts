import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements AfterViewInit {

  constructor() { 
    
  }

  // public function test(){
  //   console.log(document.getElementById("video").offsetWidth)
  // }

  ngAfterViewInit(): void {
    
    console.log("dasdsa");
this.hola();
    this.onResize();
    document.getElementById("colVideo").style.height = String(document.getElementById("video").offsetHeight + "px")
  }

  async hola(){
    await new Promise( resolve => setTimeout(resolve, 300) );
    document.getElementById("colVideo").style.height = String(document.getElementById("video").offsetHeight + "px")
  }

  onResize() {
    document.getElementById("colVideo").style.height = String(document.getElementById("video").offsetHeight + "px")
  }

}
