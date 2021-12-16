import { TestBed } from '@angular/core/testing';

import { VisualizarAlunoService } from './visualizar-aluno.service';

describe('VisualizarAlunoService', () => {
  let service: VisualizarAlunoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisualizarAlunoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
