import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;
  hidePassword = true;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { } 

  ngOnInit(): void {    
    this.loginForm = this.fb.group({
      usuario: ["",Validators.required,],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    })  
  }

  toCadastrar(){
    this.router.navigate(['/cadastrar-usuario']);
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log("Login Ok");
    }else {
      console.log("errado");
    }
  }


}
