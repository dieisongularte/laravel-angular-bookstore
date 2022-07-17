import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Filtro } from '@root/entities/book';

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
      de: [null, [Validators.required, Validators.min(1)]],
      ate: [null, [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit(): void {}

  filtrar(): void {
    if (this.form.valid) {
      this.newValuesFilter.emit(this.form.value);
    }
  }
}
