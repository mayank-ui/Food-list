import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllFoodComponent } from './all-food/all-food.component';
import { ChineseComboComponent } from './chinese-combo/chinese-combo.component';
import { ChineseStarttersComponent } from './chinese-startters/chinese-startters.component';
import { FoodComponent } from './food/food.component';
import { OrientalComponent } from './oriental/oriental.component';
import { SaladsComponent } from './salads/salads.component';


const routes: Routes = [
{ path:'', pathMatch:'full', redirectTo:'all-food'},
{ path:'food', component:FoodComponent},
{ path:'all-food', component:AllFoodComponent},
{ path:'chinese-combo', component:ChineseComboComponent},
{ path:'chinese-starter', component:ChineseStarttersComponent},
{ path:'salads', component:SaladsComponent},
{ path:'oriental', component:OrientalComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
