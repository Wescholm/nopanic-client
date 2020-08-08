import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ICitiesList, IMenuElements} from "../../interfaces/data-services-interfaces";
import {Subscription} from "rxjs";
import {DataService} from "../../core/services/data.service";
import {validateHeading} from "../../validators/place-order-validators";

@Component({
  selector: 'place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent implements OnInit, OnDestroy {

  public orderForm: FormGroup;
  private getSectionsRequests: Subscription;
  private getCitiesRequests: Subscription;
  public sectionsList: IMenuElements;
  public citiesList: ICitiesList[];

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.importData();
    this.orderForm = this.formBuilder.group({
      Section: [],
      Heading: ['', validateHeading],
      City: []
    });
    this.orderForm.valueChanges.subscribe((v) => {
      console.log(v);
    })
  }

  checkControlsValidity(name: string): boolean {
    return this.orderForm.get(name).touched && this.orderForm.get(name).invalid;
  }

  getErrorMessage(controlName: string): string {
    return this.orderForm.get(controlName).errors.message;
  }

  importSections(): void  {
    this.getSectionsRequests = this.dataService.getMenuElements()
      .subscribe((data: IMenuElements) => {
        this.sectionsList = data;
      })
  }

  importData(): void {
    this.importCities();
    this.importSections();
  }

  importCities(): void  {
    this.getCitiesRequests = this.dataService.getCities()
      .subscribe((data: ICitiesList[]) => {
        this.citiesList = data.sort((a, b) => (a.englishName > b.englishName) ? 1 : -1);
      })
  }

  ngOnDestroy(): void {
    this.getCitiesRequests.unsubscribe();
    this.getSectionsRequests.unsubscribe();
  }

  submit(): void {}
}
