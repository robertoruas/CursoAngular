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
  valorAtual: String;
  valorSalvo: String;
  cursoAngular: Boolean = true;
  isMouserOver: Boolean = false;
  nome: String = 'abc';

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão Clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouserOver = !this.isMouserOver;
  }

  constructor() { }

  ngOnInit() {
  }

}
