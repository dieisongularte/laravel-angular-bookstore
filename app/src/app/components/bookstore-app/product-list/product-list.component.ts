import { Component, OnInit } from '@angular/core';
import { ResquestService } from '../../../services/resquest.service';
import { environment } from '../../../../environments/environment';
import { Book } from '../../../entities/book';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  livros: Array<Book> = [];

  constructor(private requestService: ResquestService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    let url = environment.apiUrl + 'books';
    return this.requestService
      .getAll<{ success: boolean; result: Array<Book> }>(url)
      .subscribe({
        next: (value) => {
          this.livros = value.result;
        },
        error: (e) => console.log(e),
      });
  }
}
