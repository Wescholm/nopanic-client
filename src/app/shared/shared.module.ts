import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownListComponent } from './components/drop-down-list/drop-down-list.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MaterialModule} from "../material.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    DropDownListComponent
  ],
  exports: [
    DropDownListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatCheckboxModule,
    FormsModule,
  ]
})
export class SharedModule { }
