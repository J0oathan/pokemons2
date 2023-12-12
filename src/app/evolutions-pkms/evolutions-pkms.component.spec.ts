import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolutionsPkmsComponent } from './evolutions-pkms.component';

describe('EvolutionsPkmsComponent', () => {
  let component: EvolutionsPkmsComponent;
  let fixture: ComponentFixture<EvolutionsPkmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvolutionsPkmsComponent]
    });
    fixture = TestBed.createComponent(EvolutionsPkmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
