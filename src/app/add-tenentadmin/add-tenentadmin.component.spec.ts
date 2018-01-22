import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTenentadminComponent } from './add-tenentadmin.component';

describe('AddTenentadminComponent', () => {
  let component: AddTenentadminComponent;
  let fixture: ComponentFixture<AddTenentadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTenentadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTenentadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
