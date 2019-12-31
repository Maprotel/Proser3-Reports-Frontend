import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMenuMainComponent } from './header-menu-main.component';

describe('HeaderMenuMainComponent', () => {
  let component: HeaderMenuMainComponent;
  let fixture: ComponentFixture<HeaderMenuMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderMenuMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMenuMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
