import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsipPage } from './reportsip.page';

describe('ReportsipPage', () => {
  let component: ReportsipPage;
  let fixture: ComponentFixture<ReportsipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsipPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
