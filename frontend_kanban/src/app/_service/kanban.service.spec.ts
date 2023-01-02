import { TestBed } from '@angular/core/testing';

import { KanbanService } from './kanban.service';

describe('ServiceService', () => {
  let service: KanbanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KanbanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
