import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { ProductssrvService } from '../productssrv.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  //Create an Array
  //products = new Array<{ title: string }>();
  products = new Array<any>();

  constructor(public ProductssrvService: ProductssrvService) { }

  ngOnInit(): void {
    this.ProductssrvService.getProducts().subscribe(response => {
      this.products = response;
      //(error) => { console.log(error)}
      console.log('Checunya is getting the following products:', this.products)
    });
  }

}
