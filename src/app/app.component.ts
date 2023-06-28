import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Curso angular ';


  hola = [
    "pedro",
    "laura",
    "valentina",
    "ferxxxo"
  ]
  Activated = true;


  press(){
    this.Activated = false;
  }
  dontpress(){
    this.Activated = true;
  }


  name:string = "Ray Ray";
  age!:number;
  address:{
    street:string;
    city:string;
  }
  
  hobbies!: string[];

  constructor(){
    this.age = 29;
    this.address = {
      street: '211b baker street',
      city: "London"
    };

    this.hobbies = ['nada','escribir','comer'];
  }

}

