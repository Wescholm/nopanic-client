import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'orders-navigation',
  templateUrl: './orders-navigation.component.html',
  styleUrls: ['./orders-navigation.component.scss']
})
export class OrdersNavigationComponent implements OnInit {

  tab : any = 'tab1';
  tab1 : any
  tab2 : any
  tab3 : any
  tab4 : any

  constructor() { }

  ngOnInit(): void {
  }

  onClick(check) {
    if (check===1) {
      this.tab = 'tab1';
    } else if (check===2) {
      this.tab = 'tab2'
    } else if (check===3){
      this.tab = 'tab3'
    } else {
      this.tab = 'tab4'
    }
}

}
