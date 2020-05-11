import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeDetailComponent } from './fake-detail.component';

describe('FakeDetailComponent', () => {
  let component: FakeDetailComponent;
  let fixture: ComponentFixture<FakeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
