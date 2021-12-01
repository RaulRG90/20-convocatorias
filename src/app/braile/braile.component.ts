import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-braile',
  templateUrl: './braile.component.html',
  styleUrls: ['./braile.component.scss']
})
export class BraileComponent implements OnInit {

  constructor() {
    document.getElementById('accessibility').style.display = "block";
   }

  ngOnInit(): void {
  }
  apagar(){
    document.getElementById('accessibility').style.display = "none";
  }

}
