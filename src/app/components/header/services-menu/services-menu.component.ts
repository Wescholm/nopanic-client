import {Component, OnInit} from '@angular/core';
import {IMenuElements} from "../../../interfaces/data-services-interfaces";
import {Subscription} from "rxjs";
import {DataService} from "../../../services/data.service";

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
