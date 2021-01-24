import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  itemDetails:any = [];
  imageelement:any = [];
  constructor(private router:Router) {
    this.itemDetails = this.router.getCurrentNavigation().extras.state;
   }

  ngOnInit(): void {
  }
  previewImg(imgUrl){
    console.log(imgUrl);
    this.imageelement = document.getElementById("previewImg");
    this.imageelement.src = imgUrl;
  }

}
