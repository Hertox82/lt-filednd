import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LtFiledndComponent } from './lt-filednd.component';

describe('LtFiledndComponent', () => {
  let component: LtFiledndComponent;
  let fixture: ComponentFixture<LtFiledndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LtFiledndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LtFiledndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
