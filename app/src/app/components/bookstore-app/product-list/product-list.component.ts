import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ResquestService } from '../../../services/resquest.service';
import { environment } from '../../../../environments/environment';
import { Book, Filtro } from '../../../entities/book';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnChanges {
  @Input() filtro: Filtro = { de: 0, ate: 0 };

  livros: Array<Book> = [];

  constructor(private requestService: ResquestService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['filtro'].firstChange) {
      let de = changes['filtro'].currentValue.de;
      let ate = changes['filtro'].currentValue.ate;
      let endpoint = `books/?de=${de}&ate=${ate}`;

      this.getBooks(endpoint);
    }
  }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(endpoint: string = 'books') {
    let url = environment.apiUrl + endpoint;
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
