import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuitemsPage } from './menuitems.page';

describe('MenuitemsPage', () => {
  let component: MenuitemsPage;
  let fixture: ComponentFixture<MenuitemsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuitemsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuitemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
