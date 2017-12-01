import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ProductListComponent } from './products/product-list.component';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent }  from './app.component';
import { ConvertToSpacesPipe } from "./shared/convert-to-spaces.pipe";
import { StarComponent } from "./shared/star.component";

@NgModule({
  
  declarations: [ 
    AppComponent, 
     ProductListComponent,
     ConvertToSpacesPipe,
     StarComponent
   ],
   imports: [ 
    BrowserModule, 
    FormsModule,
    HttpClientModule
],
  bootstrap: [ AppComponent ]
})
export class AppModule { }