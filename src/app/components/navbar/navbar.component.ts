import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isBtnActive: number = 1;

  constructor() {}
  ngOnInit(): void {}

  toggleBtn(id: number) {
    this.isBtnActive = id;
  }
}
