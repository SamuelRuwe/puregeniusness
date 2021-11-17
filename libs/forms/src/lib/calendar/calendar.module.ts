import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [CalendarComponent]
})
export class CalendarModule { }
