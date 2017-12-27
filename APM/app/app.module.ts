import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent} from './products/product-detail.component';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent }  from './app.component';
import { ConvertToSpacesPipe } from "./shared/convert-to-spaces.pipe";
import { StarComponent } from "./shared/star.component";
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  
  declarations: [ 
    AppComponent, 
     ProductListComponent,
     ProductDetailComponent,
     WelcomeComponent,
     ConvertToSpacesPipe,
     StarComponent
   ],                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
   imports: [ 
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id', component: ProductDetailComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: ' ', redirectTo: 'welcome' , pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch : 'full'},
      
    ], { useHash: true})
    
],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
