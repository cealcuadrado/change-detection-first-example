import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  fruits = ['Mango', 'Orange', 'Banana'];

  constructor() { }

  ngOnInit(): void {
  }

  addFruit(el: any): void {
    this.fruits.push(el.value);
    el.value = '';
  }

}
