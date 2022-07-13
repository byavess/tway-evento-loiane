import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import {HttpModule }from '@angular/http';
import { FormsModule } from '@angular/forms';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { MeuFormModule } from './meu-form/meu-form.module';
import { CicloComponent } from './ciclo/ciclo.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    CicloComponent,
    InputPropertyComponent,
    OutputPropertyComponent
  ],
  imports: [
    BrowserModule,
  //  AppRoutingModule
  FormsModule,
  MeuFormModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
