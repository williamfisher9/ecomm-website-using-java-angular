import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
    {path: 'products', component: ProductsComponent}, {path: '**', component: FooterComponent}, {path: '', redirectTo: '/product', pathMatch: 'full'}
];
