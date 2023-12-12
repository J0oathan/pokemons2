import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogPokedexComponent } from './catalog-pokedex.component';

describe('CatalogPokedexComponent', () => {
  let component: CatalogPokedexComponent;
  let fixture: ComponentFixture<CatalogPokedexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatalogPokedexComponent]
    });
    fixture = TestBed.createComponent(CatalogPokedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
