import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product.model';
import { CatServiceService } from '../services/cat-service.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  currentProduct?:Product;
  url?:string;
  constructor(private  router:Router, private activatedRoute:ActivatedRoute, private cat_service:CatServiceService) { }

  ngOnInit(): void {

    this.url =this.activatedRoute.snapshot.params.id
    this.cat_service.getProduct(this.url)
    .subscribe(data =>{
      console.log(data)
      this.currentProduct = data ; 
    }, err=>{
      console.log(err);
    })
  }

  onUpdateProduct(form:any){
    this.cat_service.updateProduct(this.cat_service.host+"/produits/"+this.url, form)
    .subscribe(data=>{
      alert("Update successfully");
      this.router.navigateByUrl("/product")
    }, err=>{
      console.log(err)
    })

  }

}
