import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { CadastrarUsuarioService } from './cadastrar-usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.scss']
})
export class CadastrarUsuarioComponent implements OnInit {

  cadastroForm!: FormGroup;
  hidePassword = true;
  hideConfirmPassword = true;
  loadingCep = false;
  private _snackBar = inject(MatSnackBar);

  constructor(
    private fb: FormBuilder,
    private cadastrarUsuarioService: CadastrarUsuarioService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],       
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmacaoSenha: ['', Validators.required],
      cep: ['', [Validators.required, Validators.pattern(/^\d{5}-?\d{3}$/) ,Validators.minLength(8)]],
      bairro: [''],
      localidade: [''],
      uf: ['']
    }, { validator: this.validaSenhas });
  }

  validaSenhas(formGroup: FormGroup) {
    const senha = formGroup.get('senha')?.value;
    const confirmacaoSenha = formGroup.get('confirmacaoSenha')?.value;
    return senha === confirmacaoSenha ? null : { senhaDiferente: true };
  }

  buscarCep() {    
    this.loadingCep = true;
    const cep = this.cadastroForm.get('cep')?.value?.replace(/\D/g, '');
    if (cep && cep.length == 8) {        
      this.cadastrarUsuarioService.buscarCep(cep).subscribe({
        next: (data) => {
          if (!data.erro) {
            this.cadastroForm.patchValue({
              bairro: data.bairro,
              localidade: data.localidade,
              uf: data.uf,              
            });
          }
          this.loadingCep = false;
        },
        error: (err) => {           
          this.loadingCep = false;
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo deu errado na consulta do seu endereço.",
            footer: 'tente novamente mais tarde'
          });
          this.cadastroForm.get('cep')?.reset();           
        }        
      });
    } else if(cep && cep.length != 8){     
      this.loadingCep = false;
      this.openSnackBar("O campo CEP está incompleto, favor preencher o CEP corretamente.");     
    }  else{
      this.loadingCep = false;
      this.openSnackBar("O campo CEP é obrigatório. Por favor, preencha o CEP para continuar."); 
    }
  }  
  
  openSnackBar ( mensagem: string ) {
    this._snackBar.open(mensagem, 'Fechar', {
      duration: 3000, 
      horizontalPosition: 'center', 
      verticalPosition: 'top',       
    });
  }    

  limparFormulario() {
    this.cadastroForm.reset();
  }

  toLogin(){
    this.router.navigate(['/']);
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      Swal.fire({
        title: "Tudo certo!",
        text: "Você foi cadastrado com sucesso!",
        icon: "success"
      });
      console.log('Dados enviados:', this.cadastroForm.value);
    } else {
      this.openSnackBar("Para prosseguir, preencha todos os campos obrigatórios do formulário.");
    }
  }
}