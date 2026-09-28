import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CharactersCardModule } from '@characters/characters-card/characters-card.module';
import { CharactersDetailModalModule } from '@characters/characters-detail-modal/characters-detail-modal.module';

import { HomeComponent } from './home.component';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CharactersCardModule,
    CharactersDetailModalModule,
  ],
})
export class HomeModule {}
