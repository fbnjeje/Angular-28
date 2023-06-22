import { Component, Input, OnInit } from '@angular/core';
import { Entrada } from 'src/app/shared/interfaces/interfaces';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.scss']
})
export class EntradaComponent implements OnInit{
  @Input()
  public entrada!: Entrada;

  constructor(){

  }
  ngOnInit(): void {
      
  }
}
