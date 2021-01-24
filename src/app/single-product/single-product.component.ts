import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  @Input('itemData')
  Item:any = [];
  mainImg:String="";

  constructor() { }

  ngOnInit(): void {
    this.setMainProductImg();
  }

  setMainProductImg(){
    const itemImages = this.Item.image.find(e => e.type === 'main');  
    console.log(itemImages.url);
    this.mainImg = itemImages.url;
  }
}
