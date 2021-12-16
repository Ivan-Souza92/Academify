import { TestBed } from '@angular/core/testing';

import { EditarAlunoService } from './editar-aluno.service';

describe('EditarAlunoService', () => {
  let service: EditarAlunoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditarAlunoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
