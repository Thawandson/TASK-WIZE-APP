import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  ) { } 

  ngOnInit(): void {    
    this.loginForm = this.fb.group({
      usuario: ["",Validators.required,],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    })  
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log("Login Ok");
    }else {
      console.log("errado");
    }
  }


}
