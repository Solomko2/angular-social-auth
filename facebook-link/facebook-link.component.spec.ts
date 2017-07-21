import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookLinkComponent } from './facebook-link.component';

describe('FacebookLinkComponent', () => {
  let component: FacebookLinkComponent;
  let fixture: ComponentFixture<FacebookLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
