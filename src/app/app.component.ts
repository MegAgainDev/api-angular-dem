import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //Declaring values
  name = 'Angular ' + VERSION.major;

  //Shopping Cart Feature Add or Remove Items
  public carts: any[] = new Array();
  public Name;
  public Price;
  public Photo;
  public products = [
    { Name: 'iPhone', Price: '$1050.00', Photo: '/app/images/iPhone.jpg' },
    {
      Name: 'Samsung TV',
      Price: '$587.99',
      Photo:
        'https://cdn.jsdelivr.net/gh/kjagannathreddy/angular-shopping-cart-nit@master/award.jpg',
    },
    {
      Name: 'Laptop',
      Price: '$1,250.00',
      Photo:
        'https://cdn.jsdelivr.net/gh/kjagannathreddy/angular-shopping-cart-nit@master/award.jpg',
    },
    {
      Name: 'Wireless Speaker',
      Price: '$215.00',
      Photo:
        'https://cdn.jsdelivr.net/gh/kjagannathreddy/angular-shopping-cart-nit@master/award.jpg',
    },
    {
      Name: 'Sparx shoes',
      Price: '1000',
      Photo:
        'https://cdn.jsdelivr.net/gh/kjagannathreddy/angular-shopping-cart-nit@master/award.jpg',
    },
    {
      Name: 'Killer Jeans',
      Price: '1500',
      Photo:
        'https://cdn.jsdelivr.net/gh/kjagannathreddy/angular-shopping-cart-nit@master/award.jpg',
    },
  ];
  public add_to_cart(index) {
    this.carts.push(this.products[index]);
  }
  public remove_cart(index) {
    this.carts.splice(index, 1);
  }
}
