import { Component, OnInit } from "@angular/core";
import { IProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: "pm-products",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  pageTitle: string = "Product List";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string;

  private _listFilter: string = "";
  public get listFilter(): string {
    return this._listFilter;
  }
  public set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this._listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }
  
  products: IProduct[];
  filteredProducts: IProduct[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: x => {
        this.products = x;
        this.filteredProducts = this.products;
      },
      error: x => this.errorMessage = x
    });
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filter: string): IProduct[] {
    filter = filter.toLocaleLowerCase();
    return this.products.filter(x =>
      x.name.toLocaleLowerCase().includes(filter));
  }

  onRatingClicked(message: string) {
    this.pageTitle = "Product List " + message;
  }
}
