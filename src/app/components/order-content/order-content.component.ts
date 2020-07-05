import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'order-content',
  templateUrl: './order-content.component.html',
  styleUrls: ['./order-content.component.scss']
})
export class OrderContentComponent implements OnInit {

  public orders: number[] = [1, 2, 3, 4, 5, 6];

  constructor() { }

  ngOnInit(): void {
  }

}
