import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-profile',
  templateUrl: './header-profile.component.html',
  styleUrls: ['./header-profile.component.scss']
})
export class HeaderProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  profileToggle() {
    const dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('down');
  }
}
