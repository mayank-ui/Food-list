import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChineseComboComponent } from './chinese-combo.component';

describe('ChineseComboComponent', () => {
  let component: ChineseComboComponent;
  let fixture: ComponentFixture<ChineseComboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChineseComboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChineseComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
