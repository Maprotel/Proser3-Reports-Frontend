import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMenuPersonComponent } from './header-menu-person.component';

describe('HeaderMenuPersonComponent', () => {
  let component: HeaderMenuPersonComponent;
  let fixture: ComponentFixture<HeaderMenuPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderMenuPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMenuPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
