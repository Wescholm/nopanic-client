import { NgModule } from '@angular/core';
import { DropDownListComponent } from '../shared/components/drop-down-list/drop-down-list.component';
import {MaterialModule} from "./material.module";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {CheckboxModule} from "primeng/checkbox";

@NgModule({
  declarations: [
    DropDownListComponent
  ],
  exports: [
    DropDownListComponent
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    CheckboxModule
  ]
})
export class SharedModule { }
