import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { ForeignPlayerCardsComponent } from './components/foreign-player-cards/foreign-player-cards.component';
import { PlayerCardsComponent } from './components/player-cards/player-cards.component';
import { DeckComponent } from './components/deck/deck.component';
import { ShowCardsComponent } from './components/show-cards/show-cards.component';
import { FaceDownCardsComponent } from './components/face-down-cards/face-down-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ForeignPlayerCardsComponent,
    PlayerCardsComponent,
    DeckComponent,
    ShowCardsComponent,
    FaceDownCardsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
