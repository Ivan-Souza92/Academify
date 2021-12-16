import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/aluno.model';
import { ListagemService } from './listagem.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  alunos : Aluno[] = []

  displayedColumns: string[] = ['nome','matricula','acoes'];

  constructor( private listagemService: ListagemService ) { }

  ngOnInit(): void {
    this.List()
  }

  List(){
    this.listagemService.findAll().subscribe(res =>{
      this.alunos = res;
    })
  }
}
