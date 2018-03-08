import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SameAccountRemovalComponent } from './same-account-removal.component';

describe('SameAccountRemovalComponent', () => {
  let component: SameAccountRemovalComponent;
  let fixture: ComponentFixture<SameAccountRemovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SameAccountRemovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SameAccountRemovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
