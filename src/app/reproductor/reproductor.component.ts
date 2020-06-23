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
    console.log(this.hola());
    this.onResize();
    document.getElementById("colVideo").style.height = String(document.getElementById("video").offsetHeight + "px")
  }

  hola(){
    return 2;
  }

  onResize() {
    document.getElementById("colVideo").style.height = String(document.getElementById("video").offsetHeight + "px")
  }

}
