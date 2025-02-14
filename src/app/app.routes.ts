import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent), title: 'Login' },
      { path: 'register', loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent), title: 'Register' }
    ],
  },

  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent), title: 'Home' },
      { path: 'cart', loadComponent: () => import('./pages/cart/cart.component').then(m => m.CartComponent), title: 'Cart' },
      { path: 'products', loadComponent: () => import('./pages/product/product.component').then(m => m.ProductComponent), title: 'Products' },
      { path: 'brands', loadComponent: () => import('./pages/brands/brands.component').then(m => m.BrandsComponent), title: 'Brands' },
      { path: 'categories', loadComponent: () => import('./pages/categories/categories.component').then(m => m.CategoriesComponent), title: 'Categories' },
      { path: 'checkout', loadComponent: () => import('./pages/checkout/checkout.component').then(m => m.CheckoutComponent), title: 'Checkout' },
      { path: '**', component: NotfoundComponent },
    ]
  }
];
