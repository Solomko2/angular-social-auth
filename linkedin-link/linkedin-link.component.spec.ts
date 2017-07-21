import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinLinkComponent } from './linkedin-link.component';

describe('LinkedinLinkComponent', () => {
  let component: LinkedinLinkComponent;
  let fixture: ComponentFixture<LinkedinLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkedinLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedinLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
