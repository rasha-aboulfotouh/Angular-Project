import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { Observable } from 'rxjs';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productsCart!: Product[];


  constructor(

    private CService: CartService) { }


  ngOnInit(): void {

    this.productsCart = this.CService.getCartitem();

  }



  remove(id: number) {

    this.CService.removeitem(id);
  }


}
