import { Component, OnInit } from "@angular/core";
import { IProduct } from "../../models/product";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../../product.service";

@Component({
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  pageTitle = "Product Details";
  errorMessage = "";
  product: IProduct;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get("id");
    this.pageTitle += `: ${id}`;
    this.productService.getProduct(id).subscribe({
      next: x => (this.product = x),
      error: x => (this.errorMessage = x)
    });
  }

  onBack() {
    this.router.navigate(["/products"]);
  }
}