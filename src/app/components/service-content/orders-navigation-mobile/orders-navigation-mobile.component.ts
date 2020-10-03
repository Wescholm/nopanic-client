import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'orders-navigation-mobile',
  templateUrl: './orders-navigation-mobile.component.html',
  styleUrls: ['./orders-navigation-mobile.component.scss']
})
export class OrdersNavigationMobileComponent implements OnInit {

  public orderItems;
  private getSectionsRequests: Subscription;

  constructor(protected dataServise: DataService) { }

  ngOnInit(): void {
    this.importSections();
  }

  importSections() {
    this.getSectionsRequests = this.dataServise.getMenuElements()
      .subscribe((data) => {
        this.orderItems = data;
      })
  }


  changed(e) {
    console.log('e', e)
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
