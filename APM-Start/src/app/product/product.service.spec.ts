/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { ProductService } from "./product.service";
import { HttpClient } from "@angular/common/http";

describe("Service: Product.service", () => {
  let testBedService: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductService, { provide: HttpClient }]
    });

    testBedService = TestBed.get(ProductService);
  });

  it("should ...", inject([ProductService], (service: ProductService) => {
    expect(service).toBeTruthy();
  }));

  it("should ...", inject([ProductService], (service: ProductService) => {
    expect(service).toBe(testBedService);
  }));
});
