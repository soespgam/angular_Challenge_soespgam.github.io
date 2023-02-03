import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUrlComponent } from './card-url.component';

describe('CardUrlComponent', () => {
  let component: CardUrlComponent;
  let fixture: ComponentFixture<CardUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardUrlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
