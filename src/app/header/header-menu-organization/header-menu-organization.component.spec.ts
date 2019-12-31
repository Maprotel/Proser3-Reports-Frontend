import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMenuOrganizationComponent } from './header-menu-organization.component';

describe('HeaderMenuOrganizationComponent', () => {
  let component: HeaderMenuOrganizationComponent;
  let fixture: ComponentFixture<HeaderMenuOrganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderMenuOrganizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMenuOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
