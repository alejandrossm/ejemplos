import { Component } from '@angular/core';
import { Opcionmenu } from './interfaces/opcionmenu';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  opciones:Opcionmenu[]=[
    {
      destino: 'home',
      icono: 'home',
      texto: 'Home'
    },
    {
      destino: 'pag2',
      icono: 'list',
      texto: 'Listas'
    },
    {
      destino: 'pag3',
      icono: 'person',
      texto: 'Personal'
    },
    {
      destino: 'pag4',
      icono: 'alert-circle',
      texto: 'Alertas'
    },
    {
      destino: 'sumapage',
      icono: 'add',
      texto: 'Sumar'
    },
    {
      destino: 'login',
      icono: 'power',
      texto: 'Iniciar Sesion'
    },
   
]

  constructor() {}
}
