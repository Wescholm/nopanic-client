import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  public listElements: Object[] = [
    {
      title: 'First', icon: '', data:
        [
          {subtitle: '1.1', value: false},
          {subtitle: '1.2', value: false},
          {subtitle: '1.3', value: false},
        ]
    },
    {
      title: 'Second', icon: '', data:
        [
          {subtitle: '2.1', value: false},
          {subtitle: '2.2', value: false},
          {subtitle: '2.3', value: false}
        ]
    },
    {
      title: 'Third', icon: '', data:
        [
          {subtitle: '3.1', value: false},
          {subtitle: '3.2', value: false},
          {subtitle: '3.3', value: false}
        ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  changed(e) {
    console.log(e)
  }
}
