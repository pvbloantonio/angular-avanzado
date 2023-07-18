import { Component, Input } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';
@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent {


  @Input('title') title: string = 'Sin Titulo';
  @Input('labels') labels1: string[] = ['Label1', 'Label2', 'Label3'];

  @Input('data') data1: ChartData<'doughnut'> =
    {
      labels: this.labels1,
      datasets: [{
        data: [350, 450, 100],
        backgroundColor: ['#6857E6', '#009FEE', '#F02059']
      }]
    };
  // Doughnut

  // public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  // public doughnutChartData: ChartData<'doughnut'> = {
  //   labels: this.doughnutChartLabels,
  //   datasets: [
  //     {
  //       data: [350, 450, 100],
  //       backgroundColor: ['#6857E6', '#009FEE', '#F02059']
  //     },

  //   ]
  // };
  public doughnutChartType: ChartType = 'doughnut';
}
