import { Component, OnInit } from '@angular/core';
import { transition } from '@angular/core/src/animation/dsl';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: String = 'http://loiane.com';
  urlImagem: String = 'http://lorempixel.com/400/200/nature/';

  cursoAngular: Boolean = true;

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  constructor() { }

  ngOnInit() {
  }

}
