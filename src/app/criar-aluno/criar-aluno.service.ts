import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aluno } from '../models/aluno.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CriarAlunoService {

  apiUrl = 'http://localhost:8080/api/aluno/incluir';

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }


  public criarAluno(aluno: Aluno): Observable<Aluno>{

    return this.http.post<Aluno>(this.apiUrl, aluno);
  }

  public mensagem(msg: string):void{
     this._snack.open(msg,"Ok", {
       duration: 3000,
       horizontalPosition: "center",
       verticalPosition: "bottom"
     })
  }
}
