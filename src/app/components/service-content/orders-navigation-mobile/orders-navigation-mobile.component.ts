import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'orders-navigation-mobile',
  templateUrl: './orders-navigation-mobile.component.html',
  styleUrls: ['./orders-navigation-mobile.component.scss']
})
export class OrdersNavigationMobileComponent implements OnInit {
  public listElements: Object[] = [
    {
      title: 'First', data:
        [
          {subtitle: '1.1', value: false},
          {subtitle: '1.2', value: false},
          {subtitle: '1.3', value: false},
        ]
    },
    {
      title: 'Second', data:
        [
          {subtitle: '2.1', value: false},
          {subtitle: '2.2', value: false},
          {subtitle: '2.3', value: false}
        ]
    },
    {
      title: 'Third', data:
        [
          {subtitle: '3.1', value: false},
          {subtitle: '3.2', value: false},
          {subtitle: '3.3', value: false}
        ]
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }
  changed(e) {
    console.log(e)
  }

  toggleFilters() {
    const filterMenu = document.querySelector('.background-filter-inner');
    const backgroundOpen = document.querySelector('.background-filter');
    const body = document.body;
    filterMenu.classList.add('open')
    backgroundOpen.classList.add('open-background')
    body.style.overflow = 'hidden'
  }

  hideFilter(e) {
    console.log('click to ', e.target)
    const filterMenu = document.querySelector('.background-filter-inner');
    const backgroundOpen = document.querySelector('.background-filter');
    const body = document.body;
    if (e.target.classList.contains("background-filter") ){
      filterMenu.classList.remove('open')
      backgroundOpen.classList.remove('open-background')
      body.style.overflow = 'scroll'
    }
    return false
  }

}
