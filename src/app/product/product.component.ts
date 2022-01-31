import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatServiceService } from '../services/cat-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products:any; 
  public size:number=5;
  public currentPage:number=0;
  public totalPages?:number;
  public pages?:Array<number>;
  public currentKeyword:string="";
  constructor(private cat_service:CatServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  onGetProduct(){
    this.cat_service.getProducts(this.currentPage, this.size).subscribe(data =>{
      this.totalPages = 5;
      console.log(data)
      this.pages = new Array<number>(this.totalPages);
      this.products = data;
    }, err =>{
      console.log(err);
    })
  }
  onPageProduct(i:any){
    this.currentPage= i;
    this.searchProduct()
  }
  onSearch(form:any){
    this.currentPage= 0;
    this.currentKeyword = form.keyword;
    this.searchProduct();
  }
  searchProduct(){
  
    this.cat_service.getProductsbyKeyWord(this.currentKeyword, this.currentPage, this.size).subscribe(data =>{
      this.totalPages = 5;
      this.pages = new Array<number>(this.totalPages);
      this.products = data;
    }, err =>{
      console.log(err);
    })
  }
  onDeleteProduct(prod:any){
    let conf = confirm("are you sur");
    if(conf)
    this.cat_service.deleteRessource(prod).subscribe(data =>{
      this.searchProduct();
    }, err=>{
      console.log(err);
    })
  }
  onEditProduct(prod:any){

    this.router.navigateByUrl("edit-product/"+prod.id);
  }
  

}
