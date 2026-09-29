import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CharactersCardComponent } from './characters-card.component';
import { SpinnerModule } from '@app/shared/components/spinner/spinner.module';

@NgModule({
  declarations: [CharactersCardComponent],
  imports: [CommonModule, RouterModule, SpinnerModule],
  exports: [CharactersCardComponent],
})
export class CharactersCardModule {}
