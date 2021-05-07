import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MyLegendTeamComponent } from './my-legend-team/my-legend-team.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { RankingComponent } from './ranking/ranking.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home',           component: HomeComponent },
  { path: 'my-legend-team', component: MyLegendTeamComponent },
  { path: 'my-team',        component: MyTeamComponent },
  { path: 'ranking',        component: RankingComponent},
  { path: 'user-profile',   component: UserProfileComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
