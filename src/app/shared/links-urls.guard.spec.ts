import { TestBed } from '@angular/core/testing';

import { LinksUrlsGuard } from './links-urls.guard';

describe('LinksUrlsGuard', () => {
  let guard: LinksUrlsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LinksUrlsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
