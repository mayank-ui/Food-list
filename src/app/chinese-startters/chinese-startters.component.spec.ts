import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChineseStarttersComponent } from './chinese-startters.component';

describe('ChineseStarttersComponent', () => {
  let component: ChineseStarttersComponent;
  let fixture: ComponentFixture<ChineseStarttersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChineseStarttersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChineseStarttersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
