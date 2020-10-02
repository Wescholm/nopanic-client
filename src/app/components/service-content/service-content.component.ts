import {Component, HostListener, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'service-content',
  templateUrl: './service-content.component.html',
  styleUrls: ['./service-content.component.scss']
})
export class ServiceContentComponent implements OnInit {

  menu: any;
  public orders: number[] = [0,1,2,3,4,5,6,7,8,9]

  constructor() { }

  @HostListener('document:keydown.escape', ['$event'], ) onKeydownHandler(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      const dropdown = document.getElementById('dropdown');
      dropdown.classList.remove('down');
    }
  }


  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    const dropdown = document.getElementById('dropdown');
    dropdown.classList.remove('down');
    console.log(event.target);
  }

  ngOnInit(): void {
  }

}
