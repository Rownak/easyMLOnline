import { Component, Input, OnInit } from '@angular/core';
import { environment } from '@environments/environment';
import Handsontable from 'handsontable';

@Component({
  selector: 'app-dbscan-results',
  templateUrl: './dbscan-results.component.html',
  styleUrls: ['./dbscan-results.component.scss']
})
export class DbscanResultsComponent implements OnInit {

  @Input() data;

  hotSettings: Handsontable.GridSettings= {
    colHeaders: true,
    rowHeaders: true,
    contextMenu: true,
    width: '100%',
    height: '100%',
    licenseKey: 'non-commercial-and-evaluation'
  };

  resultID: string = 'result-table';
  score: number =0.0;
  plotLink: string ="";
  tableData;

  constructor() { }

  ngOnInit(): void {
    this.score=this.data["silhouette_score"];
    this.plotLink=`${environment.apiUrl}/api/`+this.data["plt_url"];
    this.tableData=this.data["input_output"]
  }

}
