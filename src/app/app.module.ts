import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, ProductListComponent, ConvertToSpacesPipe],
  bootstrap: [AppComponent, ProductListComponent]
})
export class AppModule { }