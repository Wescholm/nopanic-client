import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  getMenuElements() {
    return this.http.get<any>("./assets/data/menu-list-elements.json")
  }

  getCities() {
    return this.http.get<any>("./assets/data/israel-cities.json")
  }
}
