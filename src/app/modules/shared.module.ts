import { NgModule } from '@angular/core';
import { DropDownListComponent } from '../shared/components/drop-down-list/drop-down-list.component';
import {MaterialModule} from "./material.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    DropDownListComponent
  ],
  exports: [
    DropDownListComponent
  ],
  imports: [
    MaterialModule,
    FormsModule
  ]
})
export class SharedModule { }
