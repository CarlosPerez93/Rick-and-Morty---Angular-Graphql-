import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutRoutingModule } from '@app/components/pages/about/about-routing.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, ReactiveFormsModule, AboutRoutingModule],
  exports: [SearchComponent],
})
export class SearchModule {}
