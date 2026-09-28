import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CharactersDetailModalComponent } from './characters-detail-modal.component';

@NgModule({
  declarations: [CharactersDetailModalComponent],
  imports: [CommonModule],
  exports: [CharactersDetailModalComponent],
})
export class CharactersDetailModalModule {}
