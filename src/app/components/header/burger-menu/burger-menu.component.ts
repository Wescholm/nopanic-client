import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss']
})
export class BurgerMenuComponent implements OnInit {

  public click = false

  constructor() { }

  ngOnInit(): void { }

  mobileMenuToggle() {
    const mobileMenuCont = document.querySelector('.mobile-menu-cont')
    const toggleButton = document.querySelector('.toggle-button')
    if (!this.click){
      toggleButton.classList.add('open')
      mobileMenuCont.classList.add('open')
      this.click = true
    }else{
      toggleButton.classList.remove('open')
      mobileMenuCont.classList.remove('open')
      this.click = false
    }
  }

  mobileMenuToggleContent() {
    const mobileMenu = document.getElementById('dropdown-news-list');
    mobileMenu.classList.toggle('open')
  }

  onResize(e) {
    if (e.target.innerWidth > 1002) {
      const mobileMenuCont = document.querySelector('.mobile-menu-cont')
      const toggleButton = document.querySelector('.toggle-button')
      toggleButton.classList.remove('open')
      mobileMenuCont.classList.remove('open')
      this.click = false
    }
  }

}
