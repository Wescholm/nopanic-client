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

  dropDownToggle(id) {
    const isOpen = this.elementIsOpen(id)
    console.log(id)
    const listContent: HTMLElement = document.getElementById('el_' + id)
    console.log('listContent', listContent)
    const listArrow: HTMLElement = document.getElementById('arr_' + id);

    listContent.className = isOpen
      ? listContent.className.replace("open", "close")
      : listContent.className.replace("close", "open")
    listArrow.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
  }

  valueChanged(listIndex, elementIndex) {
    this.data[listIndex]["data"][elementIndex].value = !this.data[listIndex]["data"][elementIndex].value
    this.changedValue.emit(this.data)
  }

  elementIsOpen(id) {
    const elementIsOpen = document.getElementById('el_' + id).className;
    return elementIsOpen === 'open';
  }
}
