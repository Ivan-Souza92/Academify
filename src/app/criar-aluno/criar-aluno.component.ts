import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from '../models/aluno.model';
import { CriarAlunoService } from './criar-aluno.service';

@Component({
  selector: 'app-criar-aluno',
  templateUrl: './criar-aluno.component.html',
  styleUrls: ['./criar-aluno.component.css']
})
export class CriarAlunoComponent implements OnInit {

  data = new Date();

  aluno: Aluno ={
    id: '',
    matricula: '' ,
    nome: '',
    dataNascimento: '',
    dataCadastro: ''
  }

  constructor(private service: CriarAlunoService, private route: Router) { }

  ngOnInit(): void {
  }

  public create(){
    this.service.criarAluno(this.aluno).subscribe(res=>{

      this.route.navigate(['listar']);
      this.service.mensagem("Aluno cadastrado com sucesso")

    },err =>{
         this.service.mensagem(err.error)
    })
  }

}
