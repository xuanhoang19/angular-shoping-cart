import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { PromoCode } from './promo-code.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  title = 'angular-shoping-cart';

  ngOnInit(): void { // Chạy khi vừa khởi tạo component
    this.updatecartSummary();
  }

  products: Product[] = [
    {
      id: '1',
      name: 'PRODUCT ITEM NUMBER 1',
      description: 'Description for product item number 1',
      thumbnail: 'https://via.placeholder.com/200x150',
      price: 5.99,
      quantity: 2
    },
    {
      id: '2',
      name: 'PRODUCT ITEM NUMBER 2',
      description: 'Description for product item number 2',
      thumbnail: 'https://via.placeholder.com/200x150',
      price: 9.99,
      quantity: 1
    }
  ];

  promoCodes: PromoCode[] = [
    {
      id: '1',
      name: 'ABC',
      discountPercent: 10,
    },
    {
      id: '2',
      name: 'XYZ',
      discountPercent: 20,
    },
  ];

  numberItems: number = 0;
  subTotal: number = 0;
  discountPercent: number = 0;
  discount: number = 0;
  taxPercent: number = 10;
  tax: number = 0;

  updatecartSummary() {
    let numbersItems = 0;
    let subTotal = 0;
    let tax = 0;

    for(const product of this.products) {
      numbersItems += product.quantity;
      subTotal += product.price * product.quantity;
      tax = subTotal / 100 * this.taxPercent;
    }

    this.numberItems = numbersItems;
    this.subTotal = subTotal;
    this.tax = Number(tax.toFixed(2));
  }

  removeProduct(productId: string) {
    // Xóa sản phẩm
    const index = this.products.findIndex(product => product.id === productId);
    if(index !== -1) {
      this.products.splice(index, 1);
    }

    // Tính lại tổng số lượng sản phẩm và tổng tiền
    this.updatecartSummary();
  }

  handleApplyPromoCode(code: string) {
    if(this.discount > 0) {
      alert('You have applied a discount code');
      return;
    }

    // Tính lại tiền khi nhập mã giảm giá
    const promoCode = this.promoCodes.find(
      promoCode => promoCode.name == code
    );

    this.discountPercent = promoCode ? promoCode.discountPercent : 0;
    this.discount = (this.subTotal * this.discountPercent) / 100;

    if(this.discount > 0) {
      alert('The promotional code was applied');
    } else {
      alert('Sorry, the promotional code you entered is not valid! Try code "ABC" or "XYZ"');
    }
  }
}
