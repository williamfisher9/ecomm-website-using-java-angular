import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
    {path: '', component: ProductsComponent},
    {path: 'category/:id', component: ProductsComponent}
];
