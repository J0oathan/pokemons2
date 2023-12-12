import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EvolutionsPkmsComponent } from './evolutions-pkms/evolutions-pkms.component';
import { CatalogPokedexComponent } from './catalog-pokedex/catalog-pokedex.component';
import { CatalogBerriesComponent } from './catalog-berries/catalog-berries.component';
import { PanelInfoComponent } from './panel-info/panel-info.component';

@NgModule({
  declarations: [
    AppComponent,
    EvolutionsPkmsComponent,
    CatalogPokedexComponent,
    CatalogBerriesComponent,
    PanelInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
