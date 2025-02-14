import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CadastrarUsuarioService {

  private readonly VIA_CEP_URL = 'https://viacep.com.br/ws';

  constructor(private http: HttpClient) {}

  buscarCep(cep: string): Observable<any> {
    const cepNumerico = cep.replace(/\D/g, '');
    if (cepNumerico.length !== 8) {
      return new Observable(observer => observer.error('CEP inválido'));
    }
    return this.http.get<any>(`${this.VIA_CEP_URL}/${cepNumerico}/json/`);
  }
}
