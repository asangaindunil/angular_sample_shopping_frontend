import { Component, OnInit } from '@angular/core';
import productData from '../../product_data.json';


interface Category {
  id: Number;
  name: String;
  description: String;
  image: Object;
  item:Object
}

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  categories: Category[] = productData.category;
  singleCatDetails:object=[];
  constructor() { }

  ngOnInit(): void {
  }

  async getProductFromCategory(data){
    console.log(data);
    this.singleCatDetails = data;
  }
}
