import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../models/aluno.model';
import { DeletarAlunoService } from './deletar-aluno.service';

@Component({
  selector: 'app-deletar-aluno',
  templateUrl: './deletar-aluno.component.html',
  styleUrls: ['./deletar-aluno.component.css']
})
export class DeletarAlunoComponent implements OnInit {

  data = new Date();

  aluno: Aluno = {

    id: '',
    matricula: '',
    nome: '',
    dataNascimento: '',
    dataCadastro: ''
  }

  constructor(private service: DeletarAlunoService, private route: ActivatedRoute, private router: Router) { }

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

     },err =>{
      this.service.mensagem(err.error)
    })
  }

  delete():void{
    this.service.delete(this.aluno).subscribe(res=>{
      this.router.navigate(['listar']);
      this.service.mensagem("Aluno deletado com sucesso")
    })
  }

}
