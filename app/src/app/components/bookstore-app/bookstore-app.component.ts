import { Component, OnInit } from '@angular/core';
import { Filtro } from '@root/entities/book';

@Component({
  selector: 'app-bookstore-app',
  templateUrl: './bookstore-app.component.html',
  styleUrls: ['./bookstore-app.component.css'],
})
export class BookstoreAppComponent implements OnInit {
  filters: Filtro = { de: 0, ate: 0 };

  constructor() {}

  ngOnInit(): void {}

  newValuesFilter($event: Filtro): void {
    this.filters = $event;
  }
}
