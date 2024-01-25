export class product {
  ID: string;
  imgURL: string;
  Name: string;
  price: number;
  quantity: number;
  categoryID: number;

  constructor(
    _id: string,
    _Name: string,
    _price: number,
    _photo: string,
    _q: number,
    _cid: number
  ) {
    this.ID = _id;
    this.Name = _Name;
    this.price = _price;
    this.imgURL = _photo;
    this.categoryID = _cid;
    this.quantity = _q;
  }
}
