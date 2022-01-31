import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";
import { Product } from '../model/product.model';
import { ProductComponent } from '../product/product.component';

@Injectable({
  providedIn: 'root'
})
export class CatServiceService {
  public host:string = "http://localhost:3030"
  constructor(private httpClient:HttpClient) { }

  public getProducts(page:number, size:number){
    return this.httpClient.get(this.host+"/produits?page="+page+"&size="+size);

  }


  public getProductsbyKeyWord(mc:string, page:number, size:number){
    return this.httpClient.get(this.host+"/produits/search/bydesinationPage?mc="+mc+"&page="+page+"&size="+size);
  }

  public deleteRessource(prod:any){
    return this.httpClient.delete(this.host+"/produits/"+prod.id);
  }

  public saveProduct(url:any,data:any):Observable<Product>{
    return this.httpClient.post<Product>(url, data);
  }

  public getProduct(id:any):Observable<Product>{
    return this.httpClient.get<Product>(this.host+"/produits/"+id)
  }

  public updateProduct(url:any, data:any){
    return  this.httpClient.put(url,data);
  }
}
