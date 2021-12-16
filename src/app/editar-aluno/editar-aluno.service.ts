import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Aluno } from '../models/aluno.model';

@Injectable({
  providedIn: 'root'
})
export class EditarAlunoService {

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findById(id: String): Observable<Aluno>{

    return this.http.get<Aluno>("http://localhost:8080/api/aluno/get/"+ id);
 }

 update(aluno: Aluno):Observable<void>{
  return this.http.put<void>("http://localhost:8080/api/aluno/editar",aluno);
}

public mensagem(msg: string):void{
  this._snack.open(msg,"Ok", {
    duration: 3000,
    horizontalPosition: "center",
    verticalPosition: "bottom"
  })
}

}
