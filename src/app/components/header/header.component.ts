import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  tab: any = 'tab1';
  tab1: any;
  tab2: any;
  tab3: any;


  constructor() { }

  ngOnInit(): void {
  }

  onClick(check) {
    if (check === 1){
      this.tab = 'tab1';
    } else if (check === 2){
      this.tab = 'tab2';
    } else {
      this.tab = 'tab3';
    }
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
