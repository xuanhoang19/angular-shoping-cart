import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() products;
  @Output() onRemoveProduct = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  removeProduct(productId:string):void {
    this.onRemoveProduct.emit(productId);
  }

  updateQuantity(element) {
    element.value = "0";
  }

}
