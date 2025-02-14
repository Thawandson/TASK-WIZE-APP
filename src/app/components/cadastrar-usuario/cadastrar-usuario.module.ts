import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarUsuarioComponent } from './cadastrar-usuario.component';
import { CadastrarUsuarioRoutingModule } from './cadastrar-usuario-routing.module';
import { CabecalhoModule } from '../cabecalho/cabecalho.module';
import { RodapeModule } from '../rodape/rodape.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    CadastrarUsuarioComponent
  ],
  imports: [
    CommonModule,
    CadastrarUsuarioRoutingModule,
    CabecalhoModule,
    RodapeModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class CadastrarUsuarioModule { }
