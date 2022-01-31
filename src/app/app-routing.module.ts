import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:"product", component:ProductComponent}, 
  {path:"new-product", component:AddProductComponent}, 
  {path:"", redirectTo:"/product", pathMatch:"full"},
  {path:"edit-product/:id", component:EditProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
