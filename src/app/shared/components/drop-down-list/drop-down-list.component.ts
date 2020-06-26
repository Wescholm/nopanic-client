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

  dropDownToggle(listName) {
    const isOpen = this.elementIsOpen(listName)
    const listContent: HTMLElement = document.getElementById('elements_' + listName)
    const listArrow: HTMLElement = document.getElementById('arrow_' + listName);
    listContent.style.display = isOpen ? 'none' : 'block';
    listArrow.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
  }

  valueChanged(listIndex, elementIndex) {
    this.data[listIndex]["data"][elementIndex].value = !this.data[listIndex]["data"][elementIndex].value
    this.changedValue.emit(this.data)
  }

  elementIsOpen(listName) {
    const elementStyle = document.getElementById('elements_' + listName).style.display;
    return elementStyle === 'block';
  }
}
