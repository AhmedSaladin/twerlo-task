import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PracticeComponent } from './components/practice/practice.component';
import { RankComponent } from './components/rank/rank.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SharedModule } from './shared/shared.module';
import { CorrectComponent } from './components/correct/correct.component';
import { IncorrectComponent } from './components/incorrect/incorrect.component';
import { GamestatusComponent } from './components/gamestatus/gamestatus.component';

@NgModule({
  declarations: [
    AppComponent,
    RankComponent,
    PracticeComponent,
    WelcomeComponent,
    CorrectComponent,
    IncorrectComponent,
    GamestatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
