import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Servicios
import {PokemonesService} from "./services/pokemones.service"

//Rutas
import {POKE_ROUTING}  from "./app.routes"

//pipe
import {CapiPipe} from "./app.capitalizado"

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PokemonesComponent } from './components/pokemones/pokemones.component';
import { PokemonInfoComponent } from './components/pokemon-info/pokemon-info.component';
import { BuscadorPokemonComponent } from './components/buscador-pokemon/buscador-pokemon.component';
import { PokemonAddComponent } from './components/pokemon-add/pokemon-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PokemonesComponent,
    PokemonInfoComponent,
    BuscadorPokemonComponent,
    CapiPipe,
    PokemonAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    POKE_ROUTING
  ],
  providers: [
    PokemonesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
