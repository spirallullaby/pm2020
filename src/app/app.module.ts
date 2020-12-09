import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star-component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, ProductListComponent, ConvertToSpacesPipe, StarComponent],
  bootstrap: [AppComponent],
  providers: [ProductListComponent]
})
export class AppModule { }