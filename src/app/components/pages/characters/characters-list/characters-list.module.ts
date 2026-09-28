import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { CharactersListComponent } from './characters-list.component';

import { CharactersListRoutingModule } from './characters-list-routing.module';
import { CharactersCardModule } from '../characters-card/characters-card.module';
import { SearchModule } from '@app/shared/components/search/search.module';

@NgModule({
  declarations: [CharactersListComponent],
  imports: [
    CommonModule,
    CharactersCardModule,
    InfiniteScrollModule,
    CharactersListRoutingModule,
    SearchModule,
  ],
  exports: [CharactersListComponent],
})
export class CharactersListModule {}
