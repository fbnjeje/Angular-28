import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/shared/interfaces/interfaces';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit{

  public listadoEntradas: Entrada[];

  constructor(){
    this.listadoEntradas=[
      {
        titulo: 'Introducción a angular',
        resumen: 'En esta leccion realizaremos una pequeña introducción'
      },
      {
        titulo: 'Typescript como lenguaje para angular',
        resumen: 'Breve recorrido por el lenguaje de Typescript como '
      },
      {
        titulo: 'Componentes en Angular',
        resumen: 'Aprendamos a usar los componentes en Angular y el p'
      }
    ]
  }
  ngOnInit(): void {
      
  }

}
