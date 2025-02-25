import { Component, OnInit } from '@angular/core';
import { IListaTarefas } from 'src/app/interfaces/IListaTarefas';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.scss']
})
export class ListaTarefasComponent implements OnInit{

  listaTarefas: IListaTarefas[] = []; 

  constructor() { }
  ngOnInit(): void {

  }

}
