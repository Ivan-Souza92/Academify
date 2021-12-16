import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../models/aluno.model';
import { EditarAlunoService } from './editar-aluno.service';

@Component({
  selector: 'app-editar-aluno',
  templateUrl: './editar-aluno.component.html',
  styleUrls: ['./editar-aluno.component.css']
})
export class EditarAlunoComponent implements OnInit {

  data = new Date();

  aluno: Aluno = {

    id: '',
    matricula: '',
    nome: '',
    dataNascimento: '',
    dataCadastro: ''
  }

  constructor(private service: EditarAlunoService, private route: ActivatedRoute, private router: Router) { }

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

 update(): void{
   this.service.update(this.aluno).subscribe(res=>{
     this.router.navigate(["listar"])
     this.service.mensagem("Aluno editado com sucesso")
   },err =>{
    this.service.mensagem(err.error)
})
 }

}
