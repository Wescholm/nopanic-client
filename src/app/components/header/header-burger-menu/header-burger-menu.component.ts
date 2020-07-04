import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-burger-menu',
  templateUrl: './header-burger-menu.component.html',
  styleUrls: ['./header-burger-menu.component.scss']
})
export class HeaderBurgerMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mobileMenuToggle() {
    const mobileMenu = document.getElementById('dropdown-news-list');
    mobileMenu.classList.toggle('open')
  }
}
