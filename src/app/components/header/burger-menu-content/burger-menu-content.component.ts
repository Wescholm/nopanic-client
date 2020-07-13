import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'burger-menu-content',
  templateUrl: './burger-menu-content.component.html',
  styleUrls: ['./burger-menu-content.component.scss']
})
export class BurgerMenuContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mobileMenuToggle() {
    const mobileMenu = document.getElementById('dropdown-news-list');
    mobileMenu.classList.toggle('open')
  }
}
