import { Component } from '@angular/core';
import { AddcartService } from '../../datatypes/sevices/addcart.service';
import { AuthService } from '../../datatypes/sevices/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})

// login=""
export class NavbarComponent {
  clientName: string = '';
  carts = 0;
  user = {
    name,
  };
  token = '';

  constructor(
    private cartServ: AddcartService,
    private userserve: AuthService
  ) {
    this.user = this.userserve.Getfromlocalstorage().user;
    this.token = this.userserve.Getfromlocalstorage().token;
  }

  cart(id: string) {
    this.cartServ.add(id);
    this.carts = this.cartServ.product.length;
  }
}
