import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarUsuarioComponent } from './cadastrar-usuario.component';
import { CadastrarUsuarioRoutingModule } from './cadastrar-usuario-routing.module';
import { CabecalhoModule } from '../cabecalho/cabecalho.module';
import { RodapeModule } from '../rodape/rodape.module';

@NgModule({
  declarations: [
    CadastrarUsuarioComponent
  ],
  imports: [
    CommonModule,
    CadastrarUsuarioRoutingModule,
    CabecalhoModule,
    RodapeModule
  ]
})
export class CadastrarUsuarioModule { }
