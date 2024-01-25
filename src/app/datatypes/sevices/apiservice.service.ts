import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../../components/home/product';
import { IApiResult } from '../apiresponse';
import { Iproduct } from '../product';
import { IRegister, Ilogin } from '../usertype';

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  Apipaths = 'http://localhost:5000';

  constructor(private Http: HttpClient) {}

  getProducts() {
    return this.Http.get<IApiResult<Iproduct[]>>(`${this.Apipaths}/product`);
  }
  getProductByid(id: string) {
    return this.Http.get<IApiResult<Iproduct>>(
      `${this.Apipaths}/product/${id}`
    );
  }

  Register(User: IRegister) {
    return this.Http.post<IApiResult<any>>(
      `${this.Apipaths}/user/register`,
      User
    );
  }

  Login(User: Ilogin) {
    return this.Http.post<IApiResult<any>>(`${this.Apipaths}/user/login`, User);
  }
}
