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
    // listContent.style.display = isOpen ? 'none' : 'block';
    listContent.style.opacity = isOpen ? '0' : '1';
    listContent.style.maxHeight = isOpen ? '0' : '1000px';
    listContent.style.visibility = isOpen ? 'hidden' : 'visible';
    listArrow.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
  }

  valueChanged(listIndex, elementIndex) {
    this.data[listIndex]["data"][elementIndex].value = !this.data[listIndex]["data"][elementIndex].value
    this.changedValue.emit(this.data)
  }

  elementIsOpen(id) {
    // const elementStyle = document.getElementById('el_' + id).style.display;
    const elementStyleOpacity = document.getElementById('el_' + id).style.opacity;
    const elementStyleHeight = document.getElementById('el_' + id).style.maxHeight;
    const elementStyleVisibility = document.getElementById('el_' + id).style.visibility;
    return elementStyleOpacity === '1' && elementStyleHeight === "1000px" && elementStyleVisibility === 'visible';
  }
}
