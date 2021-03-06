import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoListComponent } from './components/info-list/info-list.component';
import { MaterialModule } from '@nx-workspace/material';

@NgModule({
  declarations: [
    InfoListComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    InfoListComponent,
  ]
})
export class ListModule {}
