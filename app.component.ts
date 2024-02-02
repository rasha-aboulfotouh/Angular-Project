import { Component, inject } from '@angular/core';
import { CartService } from './cart.service';
import { FormsModule } from '@angular/forms';
import { ShopComponent } from './shop/shop.component';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularproject';


  
  /**********/




  cartitemcount!: number;

  constructor(private CService: CartService) { }

  ngOnInit(): void {
    this.CService.realcartcount.subscribe((count) => { this.cartitemcount = count });
  }



  formData: any = { }; 

  onSubmit() {
    console.log(this.formData);

  }

}
