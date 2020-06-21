import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {

  constructor() { 
    // 
  }

  // public function test(){
  //   console.log(document.getElementById("video").offsetWidth)
  // }

  ngOnInit(): void {
    console.log(document.getElementById("video").offsetWidth)
  }

}
