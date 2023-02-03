import { TestBed } from '@angular/core/testing';

import { UserListUrlsHttpService } from './user-list-urls-http.service';

describe('UserListUrlsHttpService', () => {
  let service: UserListUrlsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserListUrlsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
