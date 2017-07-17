import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookAuthComponent } from './facebook-auth.component';

describe('FacebookAuthComponent', () => {
  let component: FacebookAuthComponent;
  let fixture: ComponentFixture<FacebookAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
