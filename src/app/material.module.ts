import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatButtonToggleModule,
  MatTooltipModule,
  MatProgressBarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatIconModule,
    MatInputModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatButtonModule
  ],
  exports: [
    MatIconModule,
    MatInputModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatButtonModule
  ]
})
export class MaterialModule {}
