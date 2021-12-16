import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Aluno } from '../models/aluno.model';

@Injectable({
  providedIn: 'root'
})
export class VisualizarAlunoService {

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findById(id: String): Observable<Aluno>{
    return this.http.get<Aluno>("http://localhost:8080/api/aluno/get/"+ id);
 }
}
