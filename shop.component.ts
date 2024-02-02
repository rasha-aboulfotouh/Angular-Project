import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  
  products!: Product[];      // متغير  / /


  constructor(
    private PService: ProductService,
    private CService: CartService

  ) { }


  ngOnInit(): void {
    this.PService.getProduct().subscribe((data: Product[]) => { this.products = data });
  }


  AddToCart(product: Product) {

    this.CService.AddToCart(product);
    console.log(product);
  }

}
