import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { FavoriteComponent } from './favorite/favorite.component';

export const routes: Routes = [
    {path: '', component: ProductsComponent},
    {path: 'category/:id', component: ProductsComponent},
    {path: 'cart', component: CartComponent},
    {path: 'favorite', component: FavoriteComponent}
];
