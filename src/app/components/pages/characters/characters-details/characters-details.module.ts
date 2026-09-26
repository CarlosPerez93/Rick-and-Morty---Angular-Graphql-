import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersDetailsComponent } from './characters-details.component';

import { CharactersDetailsRoutingModule } from './characters-details-routing.module';

@NgModule({
  declarations: [CharactersDetailsComponent],
  imports: [CommonModule, CharactersDetailsRoutingModule],
})
export class CharactersDetailsModule {}
