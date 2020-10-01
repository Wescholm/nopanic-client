import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ICitiesList, IMenuElements} from "../../interfaces/data-services-interfaces";
import {Subscription} from "rxjs";
import {DataService} from "../../services/data.service";
import {
  validateDescription,
  validateHeading, validateName, validatePrice,
  validateShortDescription
} from "../../validators/place-order-validators";

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
  public isSubmit: boolean;

  get section() { return this.orderForm.get('Section'); }
  get heading() { return this.orderForm.get('Heading'); }
  get description() { return this.orderForm.get('Description'); }
  get shortDescription() { return this.orderForm.get('ShortDescription'); }
  get city() { return this.orderForm.get('City'); }
  get executionDate() { return this.orderForm.get('ExecutionDate'); }
  get price() { return this.orderForm.get('Price'); }
  get name() { return this.orderForm.get('Name'); }

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.importData();
    this.orderForm = this.formBuilder.group({
      Section: [null, [Validators.required]],
      Heading: ['', [validateHeading]],
      Description: ['', [validateDescription]],
      ShortDescription: ['', [validateShortDescription]],
      City: [null, [Validators.required]],
      Address: [],
      ExecutionDate: ['', [Validators.required]],
      Price: ['', [validatePrice]],
      Name: ['', [validateName]]
    });

    this.orderForm.valueChanges.subscribe((v) => {
      console.log(v);
    })
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

  submit(): void {
    console.log('submit');
    this.isSubmit = true;
  }
}
