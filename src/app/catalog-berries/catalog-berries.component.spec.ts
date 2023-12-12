import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogBerriesComponent } from './catalog-berries.component';

describe('CatalogBerriesComponent', () => {
  let component: CatalogBerriesComponent;
  let fixture: ComponentFixture<CatalogBerriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatalogBerriesComponent]
    });
    fixture = TestBed.createComponent(CatalogBerriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
