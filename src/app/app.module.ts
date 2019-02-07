import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServicesComponent } from './services/services.component';
import { HttpComponent } from './http/http.component';
import { FormsComponent } from './forms/forms.component';
import { LifecycleItemComponent } from './lifecycle-item/lifecycle-item.component';
import { FruitFilterPipe } from './fruit-filter.pipe';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '../../node_modules/@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleComponent,
    PipesComponent,
    ServicesComponent,
    HttpComponent,
    FormsComponent,
    LifecycleItemComponent,
    FruitFilterPipe,
    AccountComponent,
    NewAccountComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
