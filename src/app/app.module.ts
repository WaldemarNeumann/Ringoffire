import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { GameComponent } from './game/game.component';
import { PlayerComponent } from './player/player.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
// import { GameScreenComponent } from './game-screen/game-screen.component';
// import { PlayerDisplayComponent } from './player display/player display.component';
// import { InstructionsComponent } from './instructions/instructions.component';
// import { AddPlayerDialogComponent } from './add-player-dialog/add-player-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { DialogAddPlayerComponent } from './dialog-add-player/dialog-add-player.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { GameInfoComponent } from './game-info/game-info.component';
import { MatCardModule } from '@angular/material/card';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { HomeComponent } from './components/home/home.component';
import { BookComponent } from './components/book/book.component';
import { BooksComponent } from './components/books/books.component';
import { SearchComponent } from './components/search/search.component';
import { EditBookComponent } from './modal/edit-book/edit-book.component';
import { AngularFireModule } from '@angular/fire/compat';
import { EditPlayerComponent } from './edit-player/edit-player.component';







@NgModule({
  declarations: [
    AppComponent,
    StartScreenComponent,
    GameComponent,
    PlayerComponent,
    DialogAddPlayerComponent,
    GameInfoComponent,
    HomeComponent,
    BookComponent,
    BooksComponent,
    SearchComponent,
    EditBookComponent,
    EditPlayerComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export interface IBook {
  id?: string;
  name : string;
  author : string;
  genre : string;
  price : number;
}
