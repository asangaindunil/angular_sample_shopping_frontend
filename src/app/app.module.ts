import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryWidgetComponent } from './category-widget/category-widget.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SingleCategoryComponent } from './single-category/single-category.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { HttpClientModule } from '@angular/common/http';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryWidgetComponent,
    ProductListComponent,
    SingleCategoryComponent,
    SingleProductComponent,
    ProductPageComponent,
    ItemDetailsComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // For API service
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
