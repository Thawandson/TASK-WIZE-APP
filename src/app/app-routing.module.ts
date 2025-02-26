import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
  },

  {
  path: 'cadastrar-usuario',
  loadChildren: () => import('./components/cadastrar-usuario/cadastrar-usuario.module').then(m => m.CadastrarUsuarioModule)
  },

  {
    path: 'lista-tarefas',
    loadChildren: () => import('./components/lista-tarefas/lista-tarefas.module').then(m => m.ListaTarefasModule)
  },

  {
    path: 'criar-tarefa',
    loadChildren: () => import('./components/criar-tarefa/criar-tarefa.module').then(m => m.CriarTarefaModule)
  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
