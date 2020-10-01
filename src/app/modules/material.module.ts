import { NgModule } from '@angular/core';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSelectModule} from "@angular/material/select";
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";

const modules = [
  MatSelectModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatInputModule,
  MatCheckboxModule,
]

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule { }
