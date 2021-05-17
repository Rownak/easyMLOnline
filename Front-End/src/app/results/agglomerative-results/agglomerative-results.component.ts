import { Component, Input, OnInit } from '@angular/core';
import { environment } from '@environments/environment';
import { HotTableRegisterer } from '@handsontable/angular';
import Handsontable from 'handsontable';

@Component({
  selector: 'app-agglomerative-results',
  templateUrl: './agglomerative-results.component.html',
  styleUrls: ['./agglomerative-results.component.scss']
})
export class AgglomerativeResultsComponent implements OnInit{

  @Input() data;

  private hotRegisterer = new HotTableRegisterer();
  hotSettings: Handsontable.GridSettings= {
    colHeaders: true,
    rowHeaders: true,
    contextMenu: true,
    width: '100%',
    height: '100%',
    licenseKey: 'non-commercial-and-evaluation'
  };

  @Input() resultID: string;
  score:number =0.0;
  plotLink:string ="";
  tableData;

  constructor() { }

  ngOnInit(): void {
    this.score=this.data["silhouette_score"];
    this.plotLink=`${environment.apiUrl}/api/`+this.data["plt_url"];
    this.tableData=this.data["y_kmeans"];
  }

  refresh(): void{
    const hot = this.hotRegisterer.getInstance(this.resultID);
    hot.refreshDimensions();
    console.log("works?")
  }

}