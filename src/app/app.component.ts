import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'Curso angular ';


  // hola = [
  //   "pedro",
  //   "laura",
  //   "valentina",
  //   "ferxxxo"
  // ]
  // Activated = true;


  // press(){
  //   this.Activated = false;
  // }
  // dontpress(){
  //   this.Activated = true;
  // }


  // name:string = "Ray Ray";
  // age!:number;
  // address:{
  //   street:string;
  //   city:string;
  // }
  
  // hobbies!: string[];

  // constructor(){
  //   this.age = 29;
  //   this.address = {
  //     street: '211b baker street',
  //     city: "London"
  //   };

  //   this.hobbies = ['nada','escribir','comer'];
  // }


   users:string[] = ['cameron','carlos','ferxxo'];
  // sayHola(){
  //   alert('hello')
  // }


  deleteUser(user:any){
      for(let i = 0 ; i<this.deleteUser.length; i++){
        if(user === this.users[i]){
          this.users.splice(i,1)
        }
      }
  }
}

