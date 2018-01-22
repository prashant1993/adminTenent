import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenentAdminDashboardComponent } from './tenent-admin-dashboard.component';

describe('TenentAdminDashboardComponent', () => {
  let component: TenentAdminDashboardComponent;
  let fixture: ComponentFixture<TenentAdminDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenentAdminDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenentAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
