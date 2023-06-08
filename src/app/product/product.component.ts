import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Product } from './../models/product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnChanges, OnInit, OnDestroy {
  // @Input() product: Product;

  name!:string;

  title = "Hola"


  cities = ['Colombia','Perú','Canada'];

  selection !:string;

  ngOnChanges(changes: SimpleChanges): void {
      console.log("Changes ->",changes);
      
  }
  ngOnInit(): void {
      console.log('Oninit');
      
  }
  ngOnDestroy(): void {
      
  }

  onCityClicked(city:string):void{
    // console.log("Event",city);
    this.selection= city
  }
}
