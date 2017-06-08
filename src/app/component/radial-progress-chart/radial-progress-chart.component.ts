import {
  Component, OnInit, ViewChild, ElementRef,
} from '@angular/core';
import RadialProgressChart from 'radial-progress-chart';
@Component({
  selector: 'app-radial-progress-chart',
  templateUrl: './radial-progress-chart.component.html',
  styleUrls: ['./radial-progress-chart.component.css']
})
export class RadialProgressChartComponent implements OnInit {


  radialProgress: any;

  constructor() { }

  ngOnInit() {

  }


}
