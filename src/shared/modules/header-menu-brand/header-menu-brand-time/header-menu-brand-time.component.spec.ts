import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMenuBrandTimeComponent } from './header-menu-brand-time.component';

describe('HeaderMenuBrandTimeComponent', () => {
  let component: HeaderMenuBrandTimeComponent;
  let fixture: ComponentFixture<HeaderMenuBrandTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderMenuBrandTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMenuBrandTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
