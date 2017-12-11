import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleLinkComponent } from './google-link.component';

describe('GoogleLinkComponent', () => {
  let component: GoogleLinkComponent;
  let fixture: ComponentFixture<GoogleLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
