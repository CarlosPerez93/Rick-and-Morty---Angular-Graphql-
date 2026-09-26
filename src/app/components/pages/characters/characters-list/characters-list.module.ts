import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';

import { CharactersListComponent } from './characters-list.component';

import { CharactersListRoutingModule } from './characters-list-routing.module';
import { CharactersCardModule } from '../characters-card/characters-card.module';

@NgModule({
  declarations: [CharactersListComponent],
  imports: [
    CommonModule,
    CharactersCardModule,
    InfiniteScrollDirective,
    CharactersListRoutingModule,
  ],
  exports: [CharactersListComponent],
})
export class CharactersListModule {}
