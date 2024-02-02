import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  
  searchResult:undefined|Product[]
  constructor(private activeRoute: ActivatedRoute, private PService:ProductService) { }

  ngOnInit(): void {
    let query = this.activeRoute.snapshot.paramMap.get('title');
    console.warn(query);
    query && this.PService.searchProduct(query).subscribe((result)=>{
      this.searchResult=result;
      
    })
    

  }

 

}
