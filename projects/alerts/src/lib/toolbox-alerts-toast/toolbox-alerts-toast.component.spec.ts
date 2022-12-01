import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolboxAlertsToastComponent } from './toolbox-alerts-toast.component';

describe('ToolboxAlertsToastComponent', () => {
  let component: ToolboxAlertsToastComponent;
  let fixture: ComponentFixture<ToolboxAlertsToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolboxAlertsToastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolboxAlertsToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
