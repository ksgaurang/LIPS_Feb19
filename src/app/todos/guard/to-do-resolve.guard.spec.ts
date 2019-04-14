import { TestBed, async, inject } from '@angular/core/testing';

import { ToDoResolveGuard } from './to-do-resolve.guard';

describe('ToDoResolveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToDoResolveGuard]
    });
  });

  it('should ...', inject([ToDoResolveGuard], (guard: ToDoResolveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
