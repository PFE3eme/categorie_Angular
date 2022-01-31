import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product.model';
import { CatServiceService } from '../services/cat-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private catService:CatServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  onSaveProduct(data:any){
    this.catService.saveProduct(this.catService.host+"/produits",data)
    .subscribe(res =>{
     this.router.navigateByUrl("/product")
  
     
    }, err=>{
      console.log(err);
    })
  }


}
