import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.scss']
})
export class CadastrarUsuarioComponent implements OnInit {
    cadastroForm!: FormGroup;
    hidePassword = true;
    hideConfirmPassword = true;
  
    constructor(private fb: FormBuilder) {}
  
    ngOnInit(): void {
      this.cadastroForm = this.fb.group({
        nome: ['', [Validators.required, Validators.minLength(3)]],       
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required, Validators.minLength(6)]],
        confirmacaoSenha: ['', Validators.required],
        cep: ['', [Validators.required, Validators.pattern(/^\d{5}-?\d{3}$/)]],
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
      const cep = this.cadastroForm.get('cep')?.value.replace(/\D/g, '');
      if (cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
          .then(response => response.json())
          .then(data => {
            if (!data.erro) {
              this.cadastroForm.patchValue({
                bairro: data.bairro,
                localidade: data.localidade,
                uf: data.uf,             
              });
            }
          });
      }
    }
  
    onSubmit() {
      if (this.cadastroForm.valid) {
        console.log('Dados enviados:', this.cadastroForm.value);
      } else {
        console.log('Formulário inválido!');
      }
    }

}