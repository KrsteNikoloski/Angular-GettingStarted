import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsGuard } from './components/product-details/product-details.guard';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            {
                path: 'products/:id',
                canActivate: [ProductDetailsGuard],
                component: ProductDetailsComponent
            },
        ])
    ],
    exports: [RouterModule]
})
export class ProductRoutingModule { }
