import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openMenu() {
    const dropdown = document.getElementById('dropdown-menu');
    dropdown.classList.add('down');
  }
  closeMenu() {
    const dropdown = document.getElementById('dropdown-menu');
    dropdown.classList.remove('down');
  }
}
