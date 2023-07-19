import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmisionFormComponent } from './admision-form.component';

describe('AdmisionFormComponent', () => {
  let component: AdmisionFormComponent;
  let fixture: ComponentFixture<AdmisionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmisionFormComponent]
    });
    fixture = TestBed.createComponent(AdmisionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
