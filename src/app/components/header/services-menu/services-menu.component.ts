import {Component, OnInit, OnDestroy} from '@angular/core';
import {IMenuElements} from "../../../interfaces/data-services-interfaces";
import {DataService} from "../../../core/services/data.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'services-menu',
  templateUrl: './services-menu.component.html',
  styleUrls: ['./services-menu.component.scss']
})
export class ServicesMenuComponent implements OnInit {

  public sectionList: IMenuElements;
  private getSectionsRequests: Subscription;

  constructor( private dataService: DataService ) {

  }

  ngOnInit(): void {
    this.importSections();
  }

  importSections(): void {
      this.getSectionsRequests = this.dataService.getMenuElements()
        .subscribe((data:IMenuElements) => {
          this.sectionList = data;
        })
  }

  ngOnDestroy(): void {
    this.getSectionsRequests.unsubscribe();
  }

}
