import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListUrlsComponent } from './user-list-urls.component';

describe('UserListUrlsComponent', () => {
  let component: UserListUrlsComponent;
  let fixture: ComponentFixture<UserListUrlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListUrlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserListUrlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
