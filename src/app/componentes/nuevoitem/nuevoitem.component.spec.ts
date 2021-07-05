import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoitemComponent } from './nuevoitem.component';

describe('NuevoitemComponent', () => {
  let component: NuevoitemComponent;
  let fixture: ComponentFixture<NuevoitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
