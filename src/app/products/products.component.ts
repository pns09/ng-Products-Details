import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {
  title: String = 'PRODUCTS';
  button: Boolean = true;
  products: any = [];
  rateno: Boolean = false;
  starrate: Boolean = true;
  constructor(private _prodservice: ProductService) {
    this.products = this._prodservice.getproducts();

  }
  ngOnInit() {
  }
  hidebtn() {
    this.button = !this.button;
  }
  parentfn(data) {
    this.title = data;

  }
  star() {
    this.rateno = !this.rateno;
    this.starrate = !this.starrate;
  }

}
