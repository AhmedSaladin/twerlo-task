import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PracticeComponent } from './components/practice/practice.component';
import { RankComponent } from './components/rank/rank.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'words', component: PracticeComponent },
  { path: 'rank', component: RankComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
