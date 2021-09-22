import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BolscanPage } from './bolscan.page';

describe('BolscanPage', () => {
  let component: BolscanPage;
  let fixture: ComponentFixture<BolscanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BolscanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BolscanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
