"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var product_service_1 = require("./product.service");
var ProductListComponent = (function () {
    function ProductListComponent(_productService) {
        this._productService = _productService;
        this.pageTitle = 'My Product List';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
        this._listFilter = 'cart';
        this.products = [];
    }
    ProductListComponent.prototype.performFilter = function (filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter(function (product) {
            return product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1;
        });
    };
    Object.defineProperty(ProductListComponent.prototype, "listFilter", {
        get: function () {
            return this._listFilter;
        },
        set: function (value) {
            this._listFilter = value;
            this.filteredProducts = this.listFilter ?
                this.performFilter(this.listFilter) :
                this.products;
        },
        enumerable: true,
        configurable: true
    });
    ProductListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("In OnInit");
        this._productService.getProducts()
            .subscribe(function (products) {
            _this.products = products;
            _this.filteredProducts = _this.products;
        }, function (error) { return _this.errorMessage = error; });
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    core_1.Component({
        selector: 'pm-products',
        templateUrl: 'app/products/product-list.component.html',
        styleUrls: ['app/products/product-list.component.css']
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map