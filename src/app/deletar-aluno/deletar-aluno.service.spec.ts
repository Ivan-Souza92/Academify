import { TestBed } from '@angular/core/testing';

import { DeletarAlunoService } from './deletar-aluno.service';

describe('DeletarAlunoService', () => {
  let service: DeletarAlunoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletarAlunoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
