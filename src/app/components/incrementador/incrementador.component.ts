import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {
  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`
  }

  @Input('valor') progreso: number = 70;
  @Input() btnClass: string = 'btn-info';

  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();

  cambiarValor(valor: number) {
    if (this.progreso >= 100 && valor >= 0) {
      this.valorSalida.emit(100);
      this.progreso = 100;
      return this.progreso
    }
    if (this.progreso <= 0 && valor < 0) {
      this.valorSalida.emit(0);
      this.progreso = 0;
      return this.progreso
    }

    this.progreso = this.progreso + valor;
    this.valorSalida.emit(this.progreso);
    return this.progreso
  }

  onChange(nuevovalor: number) {

    if (nuevovalor >= 100) {
      this.progreso = 100;
    } else if (nuevovalor <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = nuevovalor;
    }

    this.valorSalida.emit(this.progreso);

  }
}
