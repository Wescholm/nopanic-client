import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  @Input() orderIndex: number;

  constructor() { }

  ngOnInit(): void {
  }

  toggleLanguage() {
    const choseLang: HTMLElement = document.getElementById('chose-lang_'+ this.orderIndex);
    choseLang.classList.toggle('open')
  }

  toggleLanguageMobile() {
    const choseLangMobile = document.getElementById('chose-lang-mobile');
    choseLangMobile.classList.toggle('open')
  }
}
