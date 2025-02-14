import { Component } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})
export class CabecalhoComponent {

  protected nomeUsuarioLogado:string = "Thawandson";

  usuarioLogado(){
    return false;
  }

  exibirAutor(){
    Swal.fire({          
      title: "Desenvolvido por Thawandson Costa",
      text: "TWS TECNOLOGIA",
      showConfirmButton: false,
      timer: 2500
    });
  }
}
