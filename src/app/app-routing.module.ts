import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: 'cadastrar-usuario',
  loadChildren: () => import('./components/cadastrar-usuario/cadastrar-usuario.module').then(m => m.CadastrarUsuarioModule)
  },
  {
  path: '',
  loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
