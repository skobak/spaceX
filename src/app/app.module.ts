import { LaunchComponent } from './components/launch/launch.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimetableComponent } from './components/timetable/timetable.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [AppComponent, TimetableComponent, LaunchComponent, FilterPipe],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
