import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ICitiesList, IMenuElements} from "../../interfaces/data-services-interfaces";

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  getMenuElements() {
    return this.http.get<IMenuElements>("./assets/data/menu-list-elements.json")
  }

  getCities() {
    return this.http.get<ICitiesList[]>("./assets/data/israel-cities.json")
  }
}
