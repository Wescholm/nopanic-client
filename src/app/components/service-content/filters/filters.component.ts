import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from "rxjs";
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {


  public listElements;
  private getSectionsRequests: Subscription;

  constructor(protected dataService: DataService) { }


  ngOnInit(): void {
    this.importSections();
  }

  importSections() {
    this.getSectionsRequests = this.dataService.getMenuElements()
      .subscribe((data) => {
        this.listElements = data;
      })
  }

  changed(e) {
    console.log(e)
  }

 ngOnDestroy() {
    this.getSectionsRequests.unsubscribe();
 }

}
