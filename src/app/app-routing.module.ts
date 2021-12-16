import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemComponent } from './listagem/listagem.component';
import { HomeComponent } from './home/home.component';
import { CriarAlunoComponent } from './criar-aluno/criar-aluno.component';
import { DeletarAlunoComponent } from './deletar-aluno/deletar-aluno.component';
import { EditarAlunoComponent } from './editar-aluno/editar-aluno.component';
import { VisualizarAlunoComponent } from './visualizar-aluno/visualizar-aluno.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'listar',component:ListagemComponent},
  {path:'create', component:CriarAlunoComponent},
  {path:"delete/:id", component:DeletarAlunoComponent},
  {path:"editar/:id", component:EditarAlunoComponent},
  {path:"visualizar/:id",component:VisualizarAlunoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
