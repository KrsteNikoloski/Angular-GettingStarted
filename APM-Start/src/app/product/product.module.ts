import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

@NgModule({
    imports: [
        SharedModule,
        ProductRoutingModule
    ],
    declarations: [
        ProductListComponent,
        ProductDetailsComponent
    ]
})
export class ProductModule { }
