import { TestBed } from '@angular/core/testing';

import { CriarAlunoService } from './criar-aluno.service';

describe('CriarAlunoService', () => {
  let service: CriarAlunoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriarAlunoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
