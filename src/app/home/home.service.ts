import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  apiUrl = 'http://localhost:8080/api/aluno/getTotal'

  constructor(private http: HttpClient) { }

  public getAlunoTotal(): Observable<any>{

      return this.http.get(this.apiUrl);
  }

}
