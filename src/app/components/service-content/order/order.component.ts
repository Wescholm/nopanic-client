import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleLng() {
    const choseLang = document.getElementById('chose-lang');
    choseLang.classList.toggle('open')
  }
}
