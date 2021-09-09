import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pag2',
  templateUrl: './pag2.page.html',
  styleUrls: ['./pag2.page.scss'],
})
export class Pag2Page implements OnInit {

  personas=[{
    nombre:'Wacoldo',
    apellido:'Soto',
    imagen:'../assets/image/waco.png'
  },
  {
    nombre:'Diogenes',
    apellido:'Carrasco',
    imagen:'../assets/image/waco.png'
  },
  {
    nombre:'Wenceslao',
    apellido:'Vargas',
    imagen:'../assets/image/waco.png'
  },
  {
    nombre:'Amada',
    apellido:'Cerda',
    imagen:'../assets/image/waco.png'
  },

]

  constructor() { }

  ngOnInit() {
  }

}
