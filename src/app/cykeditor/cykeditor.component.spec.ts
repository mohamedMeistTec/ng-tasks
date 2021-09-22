import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CykeditorComponent } from './cykeditor.component';

describe('CykeditorComponent', () => {
  let component: CykeditorComponent;
  let fixture: ComponentFixture<CykeditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CykeditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CykeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
