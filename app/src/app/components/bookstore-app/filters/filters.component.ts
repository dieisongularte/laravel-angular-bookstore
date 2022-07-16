import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Filtro } from '../../../entities/book';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent implements OnInit {
  @Output() newValuesFilter = new EventEmitter<Filtro>();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      de: null,
      ate: null,
    });
  }

  ngOnInit(): void {}

  filtrar(value: Filtro): void {
    this.newValuesFilter.emit(value);
  }
}
