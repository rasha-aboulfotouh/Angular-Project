import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://fakestoreapi.com/products';
  filterData: any;
  //

  constructor(private http: HttpClient) { }


  // search(title: string): Observable<any> {
  //   const url = `${this.apiUrl}/search?q=${title} `;
  //   return this.http.get<any>(url);

  // }


  /*  *  *    * *  */
  searchProduct(query: string) {
    return this.http.get<Product[]>(
      `$(this.apiUrl)=${query}`
    );
  }
  /*  *  *    * *  */



  getProduct() : Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);

  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>('https://fakestoreapi.com/products/' + id.toString());
  }

}
