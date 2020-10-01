import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'service-content',
  templateUrl: './service-content.component.html',
  styleUrls: ['./service-content.component.scss']
})
export class ServiceContentComponent implements OnInit {

  public orders: number[] = [0,1,2,3,4,5,6,7,8,9]

  constructor() { }

  ngOnInit(): void {
  }

}
