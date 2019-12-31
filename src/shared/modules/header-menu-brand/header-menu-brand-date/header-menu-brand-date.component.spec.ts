import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMenuBrandDateComponent } from './header-menu-brand-date.component';

describe('HeaderMenuBrandDateComponent', () => {
  let component: HeaderMenuBrandDateComponent;
  let fixture: ComponentFixture<HeaderMenuBrandDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderMenuBrandDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMenuBrandDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
