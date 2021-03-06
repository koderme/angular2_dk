import { Component, OnInit } from '@angular/core';
import { IProduct} from './product';
import { ProductService } from "./product.service";

@Component({
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css']
})


    export class ProductListComponent implements OnInit {

        pageTitle: string = 'My Product List';
        imageWidth: number = 50;
        imageMargin: number = 2;
        showImage:boolean = false;
        _listFilter : string = 'cart';
        errorMessage: string;

        
        constructor(private _productService: ProductService) {
        }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter(
            (product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    
    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value:string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter? 
            this.performFilter(this.listFilter) :
            this.products;
    }

    filteredProducts : IProduct[];
    products : IProduct[] = [];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    ngOnInit(): void {
        console.log("In OnInit");
        this._productService.getProducts()
            .subscribe(products => { 
                            this.products = products;
                            this.filteredProducts = this.products;
                            },
                        error => this.errorMessage = <any>error);
        
            
    }
}