import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanreturnsPage } from './scanreturns.page';

describe('ScanreturnsPage', () => {
  let component: ScanreturnsPage;
  let fixture: ComponentFixture<ScanreturnsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanreturnsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanreturnsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
