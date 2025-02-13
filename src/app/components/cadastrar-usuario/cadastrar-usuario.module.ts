import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarUsuarioComponent } from './cadastrar-usuario.component';
import { CadastrarUsuarioRoutingModule } from './cadastrar-usuario-routing.module';

@NgModule({
  declarations: [
    CadastrarUsuarioComponent
  ],
  imports: [
    CommonModule,
    CadastrarUsuarioRoutingModule
  ]
})
export class CadastrarUsuarioModule { }
