import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainteacherComponent } from './mainteacher.component';

describe('MainteacherComponent', () => {
  let component: MainteacherComponent;
  let fixture: ComponentFixture<MainteacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainteacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
