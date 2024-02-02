import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-v-product',
  templateUrl: './v-product.component.html',
  styleUrls: ['./v-product.component.css']
})
export class VProductComponent implements OnInit {
  id!: number;

  product!: Observable<Product>;
  

  products!: Product[]; 

  constructor(
    private route: ActivatedRoute,
    private PService: ProductService,
    private CService: CartService
  ) { }
  

  ngOnInit(): void {

    this.id = Number(this.route.snapshot.params['id']);

    this.product = this.PService.getProductById(this.id );
  


 
    this.PService.getProduct().subscribe((data: Product[]) => { this.products = data });
  }
  

  

  AddToCart(product: Product) {

    this.CService.AddToCart(product);
    console.log(product);
  }

}
