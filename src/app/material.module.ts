import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
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
    MatProgressBarModule
  ],
  exports: [
    MatIconModule,
    MatInputModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatProgressBarModule
  ]
})
export class MaterialModule {}
