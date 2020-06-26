import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'drop-down-list',
  templateUrl: './drop-down-list.component.html',
  styleUrls: ['./drop-down-list.component.scss']
})
export class DropDownListComponent {

  @Input() title: string;
  @Input() data: any[];
  @Output("changedValue") changedValue: EventEmitter<any> = new EventEmitter();

  constructor() { }

  dropDownToggle(id) {
    const isOpen = this.elementIsOpen(id)
    const listContent: HTMLElement = document.getElementById('el_' + id)
    const listArrow: HTMLElement = document.getElementById('arr_' + id);
    listContent.style.display = isOpen ? 'none' : 'block';
    listArrow.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
  }

  valueChanged(listIndex, elementIndex) {
    this.data[listIndex]["data"][elementIndex].value = !this.data[listIndex]["data"][elementIndex].value
    this.changedValue.emit(this.data)
  }

  elementIsOpen(id) {
    const elementStyle = document.getElementById('el_' + id).style.display;
    return elementStyle === 'block';
  }
}
