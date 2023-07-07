import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductssrvService {
  constructor(private http: HttpClient) {}

  //Http Client get method.  Provide the API URL.
  public getProducts(): Observable<any> {
    //const url1 = 'https://reqres.in/api/users?page=1';
    //const url1 = 'https://fakestoreapi.com/products?limit=5';
    //const url = 'https://reqres.in/api/users?page=1';
    const url1 = 'https://fakestoreapi.com/products/category/jewelery';
    return this.http.get<any>(url1);
    //return this.http.get(url1);
  }
}
