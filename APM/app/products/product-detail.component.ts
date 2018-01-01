import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
  selector: 'app-product-detail',
  templateUrl: 'app/products/product-detail.component.html',
  styleUrls: ['app/products/product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle : string = 'Product Detail';
  product : IProduct;

  constructor(private _route : ActivatedRoute,
          private _router: Router) { }

  ngOnInit() {
    console.log("product-detail: OnInit");
    let id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.product =  {
      "productId" : id,
      "productName" : "Leaf Rake",
      "productCode" : "GDN-011",
      "releaseDate" : "March 19, 2016",
      "description" : " Leaf rake with 48 inch wooden handle",
      "price" : 19.95,
      "starRating" : 3.2,
      "imageUrl" : ""
    }
  }

  onBack() : void {
    this._router.navigate(['/products']);
  } 
}
