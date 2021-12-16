import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListagemComponent } from './listagem/listagem.component';
import { TopoComponent } from './template/topo/topo.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EditarAlunoComponent } from './editar-aluno/editar-aluno.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CriarAlunoComponent } from './criar-aluno/criar-aluno.component';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DeletarAlunoComponent } from './deletar-aluno/deletar-aluno.component';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { VisualizarAlunoComponent } from './visualizar-aluno/visualizar-aluno.component';
import { RodapeComponent } from './template/rodape/rodape.component'


@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    TopoComponent,
    HomeComponent,
    EditarAlunoComponent,
    CriarAlunoComponent,
    DeletarAlunoComponent,
    VisualizarAlunoComponent,
    RodapeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatSnackBarModule,
    MatMomentDateModule
  ],
  providers: [],
  bootstrap: [AppComponent, TopoComponent, RodapeComponent]
})
export class AppModule { }
