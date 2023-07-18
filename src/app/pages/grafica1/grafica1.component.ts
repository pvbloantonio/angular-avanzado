import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})
export class Grafica1Component {

  labels1: string[] = ['Insumos', 'Excedentes', 'Otros'];
  public data1: ChartData<'doughnut'> = {
    labels: this.labels1,
    datasets: [
      {
        data: [15, 450, 100],
        backgroundColor: ['#e36aff', '#7689f4', '#53af43'],
        hoverBackgroundColor: ['#e36aff', '#7689f4', '#53af43'],
      }

    ]
  }

}
