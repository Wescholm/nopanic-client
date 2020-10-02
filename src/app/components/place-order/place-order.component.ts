import {Component, Directive, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ICitiesList, IMenuElements} from "../../interfaces/data-services-interfaces";
import {Subscription} from "rxjs";
import {DataService} from "../../core/services/data.service";
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
  public isRotate: boolean = false;

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

  @Output('closed') closedStream: EventEmitter<void>
  @Output('opened') openedStream: EventEmitter<void>

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

  openDate(date) {
    const listArrow: HTMLElement = document.getElementById('arrow');
    this.isRotate = !this.isRotate;
    listArrow.style.transform = this.isRotate ? 'rotate(180deg)' : 'rotate(0deg)';
    if (this.isRotate) date.open();
    if (!this.isRotate) date.close();
  }

  streamOpened(date) {
    const listArrow: HTMLElement = document.getElementById('arrow');
    listArrow.style.transform = 'rotate(180deg)';
    date.open()
    console.log('open')
  }

  streamClosed(date) {
    // const listArrow: HTMLElement = document.getElementById('arrow');
    // listArrow.style.transform = 'rotate(0deg)';
    // date.close()
    console.log('close')
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
