import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menu: any;
  popoverVisible: boolean = true;

  constructor() { }

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.menu.classList.remove('down');
    }
  }

  ngOnInit(): void {
  }

  menuOpen () {
    this.menu = document.getElementById('dropdown-menu');
    this.menu.classList.add('down');
  }

  menuClose () {
    this.menu = document.getElementById('dropdown-menu');
    this.menu.classList.remove('down');
  }

  closeMenu () {
    this.menu.classList.remove('down');
  }

  closeMenuClick() {
    this.menu.classList.remove('down');
  }

}
