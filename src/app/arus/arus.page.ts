import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-arus',
  templateUrl: './arus.page.html',
  styleUrls: ['./arus.page.scss'],
})
export class ArusPage implements OnInit {

  constructor() { }

  ngOnInit() {
  this.showChart();


  }

  showChart(){

  var ctx = (<any>document.getElementById('faristp-chart')).getContext('2d');
  var chart = new Chart(ctx, {

  type: 'line',
  data: {

  labels: ["VB 6", "PHP", "Delphi"],
  datasets: [{
  			label: "This is chart",
  			backgroundColor: [
  			'rgba(255, 99, 132, 0.2)',
  			'rgba(54, 162, 235, 0.2)',
  			'rgba(255, 206, 86, 0.2)',
  			'rgba(75, 192, 192, 0.2)'
  			],
  			borderColor: [
  			'rgba(255, 99, 132, 1)',
  			'rgba(54, 162, 235, 1)',
  			'rgba(255, 206, 86, 1)',
  			'rgba(75, 192, 192, 1)'
  			],
  			data: [20, 5, 10, 45],
  			borderWidth: 1

  }]

  }

  })

  }

}
