import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadersuperadminComponent } from './headersuperadmin.component';

describe('HeadersuperadminComponent', () => {
  let component: HeadersuperadminComponent;
  let fixture: ComponentFixture<HeadersuperadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadersuperadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadersuperadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
