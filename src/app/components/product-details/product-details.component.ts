import { Component } from '@angular/core';
import { ActivatedRoute, Route, Routes } from '@angular/router';
import { ApiserviceService } from '../../datatypes/sevices/apiservice.service';
import { Iproduct } from '../../datatypes/product';

@Component({
  selector: 'app-product-details',

  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  cart(arg0: string | undefined) {
    throw new Error('Method not implemented.');
  }
  prodbyid: Iproduct | undefined;
  constructor(
    private routes: ActivatedRoute,
    private productApiserv: ApiserviceService
  ) {
    let id = this.routes.snapshot.params['id'];
    this.productApiserv.getProductByid(id).subscribe({
      next: (Response) => {
        this.prodbyid = Response.data;
      },
    });
  }
}
