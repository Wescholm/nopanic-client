import { NgModule } from '@angular/core';
import {CalendarModule} from 'primeng/calendar';

const modules = [
  CalendarModule
]

@NgModule({
  imports: modules,
  exports: modules
})
export class PrimengModule { }
