import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  tab: any = 'tab1';
  tab1: any;
  tab2: any;
  tab3: any;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(check) {
    if (check === 1) {
      this.tab = 'tab1';
    } else if (check === 2) {
      this.tab = 'tab2';
    } else {
      this.tab = 'tab3';
    }
  }

}
