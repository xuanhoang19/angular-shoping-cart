import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-promo-code',
  templateUrl: './promo-code.component.html',
  styleUrls: ['./promo-code.component.css']
})
export class PromoCodeComponent implements OnInit {
  @Output() onhandleApplyPromoCode = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  handleApplyPromoCode(code: string) {
    this.onhandleApplyPromoCode.emit(code);
  }

}
