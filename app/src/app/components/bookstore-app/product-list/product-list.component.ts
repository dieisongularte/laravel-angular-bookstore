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
  livros: any;

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
