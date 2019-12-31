import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMenuBrandConnectionComponent } from './header-menu-brand-connection.component';

describe('HeaderMenuBrandConnectionComponent', () => {
  let component: HeaderMenuBrandConnectionComponent;
  let fixture: ComponentFixture<HeaderMenuBrandConnectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderMenuBrandConnectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMenuBrandConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
