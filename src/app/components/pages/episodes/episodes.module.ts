import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EpisodesComponent } from './episodes.component';
import { CustomHeaderModule } from '@app/shared/components/custom-header/custom-header.module';

const routes: Routes = [{ path: '', component: EpisodesComponent }];

@NgModule({
  declarations: [EpisodesComponent],
  imports: [CommonModule, RouterModule.forChild(routes), CustomHeaderModule],
})
export class EpisodesModule {}
