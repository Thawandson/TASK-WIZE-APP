import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaTarefasComponent } from './lista-tarefas.component';
import { ListaTarefasRoutingModule } from './lista-tarefas-routing.module';
import { CabecalhoModule } from "../cabecalho/cabecalho.module";
import { RodapeModule } from "../rodape/rodape.module";



@NgModule({
  declarations: [
    ListaTarefasComponent
  ],
  imports: [
    CommonModule,
    ListaTarefasRoutingModule,
    CabecalhoModule,
    RodapeModule
]
})
export class ListaTarefasModule { }
