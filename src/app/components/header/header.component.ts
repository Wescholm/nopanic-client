import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public click = false
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
}
