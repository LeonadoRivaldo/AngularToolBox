import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TbToastComponent } from './tb-toast.component';

describe('TbToastComponent', () => {
  let component: TbToastComponent;
  let fixture: ComponentFixture<TbToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TbToastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TbToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
