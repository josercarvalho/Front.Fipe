import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelafipeComponent } from './tabelafipe.component';

describe('TabelafipeComponent', () => {
  let component: TabelafipeComponent;
  let fixture: ComponentFixture<TabelafipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelafipeComponent]
    });
    fixture = TestBed.createComponent(TabelafipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
