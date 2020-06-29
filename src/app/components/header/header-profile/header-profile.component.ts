import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-profile',
  templateUrl: './header-profile.component.html',
  styleUrls: ['./header-profile.component.scss']
})
export class HeaderProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  menuToggle() {
    const dropdown = document.getElementById('dropdown');
    const arrow = document.getElementById('arr');
    dropdown.classList.toggle('down');
    arrow.classList.toggle('gone');

    dropdown.classList.contains('down') ?
      setTimeout(() => {dropdown.style.overflow = 'visible'}, 500) :
      dropdown.style.overflow = 'hidden';
  }
}
