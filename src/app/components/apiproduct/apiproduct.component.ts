import { Component } from '@angular/core';
import { Iproduct } from '../../datatypes/product';
import { ApiserviceService } from '../../datatypes/sevices/apiservice.service';

@Component({
  selector: 'app-apiproduct',

  templateUrl: './apiproduct.component.html',
  styleUrl: './apiproduct.component.css',
})
export class ApiproductComponent {
cart(arg0: string) {
throw new Error('Method not implemented.');
}
  dataAPi: Iproduct[] = [];
  constructor(private productApiserv: ApiserviceService) {
    this.productApiserv.getProducts().subscribe({
      next: (response) => {
        console.log(response);

        this.dataAPi = response.data;
      },
    });
  }
}
