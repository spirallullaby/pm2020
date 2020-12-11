import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductListComponent ,
    ProductDetailComponent,
    ConvertToSpacesPipe,
  ],
  imports: [
    ProductRoutingModule,
    SharedModule,   
    FormsModule]
})
export class ProductModule { }