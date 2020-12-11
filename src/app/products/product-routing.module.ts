import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-detail.guard';
import { ProductListComponent } from './product-list.component';

const routes: Routes = [{ path: '', component: ProductListComponent },
                        { path: 'product/:id',canActivate: [ ProductDetailGuard ], component: ProductDetailComponent }
                    ];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule], 
  exports: [RouterModule]
})
export class ProductRoutingModule { }