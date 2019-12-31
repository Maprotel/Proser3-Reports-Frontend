import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMenuAuxiliarComponent } from './header-menu-auxiliar.component';

describe('HeaderMenuAuxiliarComponent', () => {
  let component: HeaderMenuAuxiliarComponent;
  let fixture: ComponentFixture<HeaderMenuAuxiliarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderMenuAuxiliarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMenuAuxiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
