import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { CabecalhoModule } from "../cabecalho/cabecalho.module";
import { RodapeModule } from "../rodape/rodape.module";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    CabecalhoModule,
    RodapeModule
]
})
export class LoginModule { }
