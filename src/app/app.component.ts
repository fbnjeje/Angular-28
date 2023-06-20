import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ReDoing';


  name!:string;

  cities = ['Colombia','Canada','Camerun'];

  selected!: string;


  onClicked(i:string){
    console.log("Hola");
    this.selected = i;
  }
  reset(){
    this.selected = ''

  }

}

