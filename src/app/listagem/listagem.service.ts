import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../models/aluno.model';

@Injectable({
  providedIn: 'root'
})
export class ListagemService {

  apiUrl = 'http://localhost:8080/api/aluno';

  constructor(private http: HttpClient) { }

  public findAll():Observable<Aluno[]>{

    const url = 'http://localhost:8080/api/aluno/listar';
    return this.http.get<Aluno[]>(url);
  }
}
