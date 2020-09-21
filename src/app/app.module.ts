import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodComponent } from './food/food.component';
import { HttpClientModule} from '@angular/common/http';
import { AllFoodComponent } from './all-food/all-food.component';
import { ChineseComboComponent } from './chinese-combo/chinese-combo.component';
import { ChineseStarttersComponent } from './chinese-startters/chinese-startters.component';
import { SaladsComponent } from './salads/salads.component';
import { OrientalComponent } from './oriental/oriental.component';
import { CartComponent } from './cart/cart.component'

@NgModule({
  declarations: [
    AppComponent,
    FoodComponent,
    AllFoodComponent,
    ChineseComboComponent,
    ChineseStarttersComponent,
    SaladsComponent,
    OrientalComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
