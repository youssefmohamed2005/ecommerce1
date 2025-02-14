import { Component, inject } from '@angular/core';
import { error } from 'console';
import { ProductsService } from '../../core/services/products/products.service';
import { IProduct } from '../../shared/interfaces/iproduct';
import { CategoriesService } from '../../core/services/categories/categories.service';
import { ICategory } from '../../shared/interfaces/icategory';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  imports: [CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    private readonly productsServices = inject(ProductsService);
    private readonly categoriesService = inject(CategoriesService);

    customMainSlider: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: true,
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause: true,
      navSpeed: 700,
      navText: ['', ''],
      items :1,
      nav: false
    }


    customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: true,
      autoplay: true,
      autoplayTimeout:2000,
      autoplayHoverPause: true,
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 4
        }
      },
      nav: false

  }

    products:IProduct[] = [];
    categories:ICategory[]=[]

    getProductsData():void{
      this.productsServices.getAllProducts().subscribe({
        next:(res)=>{
          console.log(res.data);
          this.products = res.data;
        },
        error:(err)=>{
          console.log(err);
        },
      });

    }


    getCategoryData(){
      this.categoriesService.getAllCategories().subscribe({
        next:(res)=>{
          console.log(res.data)
          this.categories = res.data
        },
        error:(err)=>{
          console.log(err)
        }

      })
    }

    ngOnInit(): void {
      this.getProductsData();
      this.getCategoryData();
    }
}
