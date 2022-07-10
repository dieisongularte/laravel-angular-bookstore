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
  livros: Array<Book> = [
    {
      id: 1,
      name: 'Teste',
      category: 'Livro',
      price: 100,
      quantity: 15,
      img: 'icone-livro',
    },
    {
      id: 2,
      name: 'Romeu e Julieta',
      category: 'Romance',
      price: 399.99,
      quantity: 500,
      img: 'icone-livro',
    },
  ];

  constructor(private requestService: ResquestService) {}

  ngOnInit(): void {}

  getBooks() {
    let url = environment.apiUrl;
    return this.requestService.getAll<Book>(url).subscribe({
      next(value) {
        console.info(value);
      },
      error(err) {
        console.log(err);
      },
    });
  }
}
