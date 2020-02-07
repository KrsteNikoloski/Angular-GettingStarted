/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProductListComponent } from "./product-list.component";
import { SharedModule } from "src/app/shared/shared.module";
import { ProductRoutingModule } from "../../product-routing.module";
import { ProductDetailsComponent } from "../product-details/product-details.component";
import { ProductService } from "../../product.service";
import { HttpClient } from "@angular/common/http";

describe("ProductListComponent", () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, ProductRoutingModule],
      declarations: [ProductListComponent, ProductDetailsComponent],
      providers: [ProductService, { provide: HttpClient }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
