import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../models/aluno.model';
import { VisualizarAlunoService } from './visualizar-aluno.service';

@Component({
  selector: 'app-visualizar-aluno',
  templateUrl: './visualizar-aluno.component.html',
  styleUrls: ['./visualizar-aluno.component.css']
})
export class VisualizarAlunoComponent implements OnInit {

  aluno: Aluno = {

    id: '',
    matricula: '',
    nome: '',
    dataNascimento: '',
    dataCadastro: ''
  }

  constructor(private service: VisualizarAlunoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.aluno.id = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  findById():void{
    this.service.findById(this.aluno.id).subscribe(res=>{
     this.aluno.matricula = res.matricula;
      this.aluno.nome = res.nome;
      this.aluno.dataNascimento = res.dataNascimento;
      this.aluno.dataCadastro = res.dataCadastro;

    })
 }

}
