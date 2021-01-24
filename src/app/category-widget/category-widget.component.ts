import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-category-widget',
  templateUrl: './category-widget.component.html',
  styleUrls: ['./category-widget.component.scss']
})
export class CategoryWidgetComponent implements OnInit {

  @Input('categories')
  Category:any;
  Item:any = [];
  constructor() { }

  @Output() newItemEvent = new EventEmitter<string>();

  ngOnInit(): void {
  }

  loadItem(id){
    console.log(id);
    const catDetails = this.Category.find(e => e.id === id);  
    this.Item =catDetails;
    this.newItemEvent.emit(this.Item)
  }


}
