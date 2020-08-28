import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TileComponent } from './tile/tile.component';
import { BoardComponent } from './board/board.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    TileComponent,
    BoardComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
