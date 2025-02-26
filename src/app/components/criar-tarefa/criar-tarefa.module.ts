import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriarTarefaComponent } from './criar-tarefa.component';
import { CriarTarefaRoutingModule } from './criar-tarefa-routing.module';
import { CabecalhoModule } from "../cabecalho/cabecalho.module";
import { RodapeModule } from "../rodape/rodape.module";

@NgModule({
  declarations: [
    CriarTarefaComponent
  ],
  imports: [
    CommonModule,
    CriarTarefaRoutingModule,
    CabecalhoModule,
    RodapeModule
]
})
export class CriarTarefaModule { }
