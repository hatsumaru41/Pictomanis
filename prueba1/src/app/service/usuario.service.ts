import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { usuario } from '../model/usuario';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url: string = "http://localhost:5000/usuarios";
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<usuario>(this.url);
  }
}
