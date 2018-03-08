import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SameAccountTransferComponent } from './same-account-transfer.component';

describe('SameAccountTransferComponent', () => {
  let component: SameAccountTransferComponent;
  let fixture: ComponentFixture<SameAccountTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SameAccountTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SameAccountTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
