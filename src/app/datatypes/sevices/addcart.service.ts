import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddcartService {
  product: string[] = [];
  add(peoductid: string) {
    this.product.push(peoductid);
    // console.log();
  }
}
