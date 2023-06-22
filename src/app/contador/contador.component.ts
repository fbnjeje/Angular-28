import { Component, OnInit } from '@angular/core';
import { Persona } from '../interfaces/persona';
@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {

  ngOnInit(): void {
  }


  // nombre:string = "fernando";

  // persona:Persona ={
  //   nombre: "fernando",
  //   edad:23
  // }
}
