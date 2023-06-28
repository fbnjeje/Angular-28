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
}
