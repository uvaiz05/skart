import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserbuyerComponent } from './userbuyer.component';

describe('UserbuyerComponent', () => {
  let component: UserbuyerComponent;
  let fixture: ComponentFixture<UserbuyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserbuyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserbuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
