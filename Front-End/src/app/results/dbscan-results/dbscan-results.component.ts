import { Component, Input, OnInit } from '@angular/core';
import { environment } from '@environments/environment';
import Handsontable from 'handsontable';
import { HotTableRegisterer } from '@handsontable/angular';
@Component({
  selector: 'app-dbscan-results',
  templateUrl: './dbscan-results.component.html',
  styleUrls: ['./dbscan-results.component.scss']
})
export class DbscanResultsComponent implements OnInit {

  @Input() data;
  private hotRegisterer = new HotTableRegisterer();
  hotSettings: Handsontable.GridSettings= {
    colHeaders: function(index) {
      return 'Attribute '+ index;
    },
    rowHeaders: function(index) {
      return 'Object '+ index;
    },
    contextMenu: true,
    rowHeaderWidth: 100,
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

  public exportCSV(event: any) { // without type info

    let exportPlugin1 = this.hotRegisterer.getInstance(this.resultID).getPlugin('exportFile');

     exportPlugin1.downloadFile('csv', {
      bom: false,
      columnDelimiter: ',',
      columnHeaders: false,
      rowHeaders: false,
      exportHiddenColumns: true,
      exportHiddenRows: true,
      fileExtension: 'csv',
      filename: 'dbScan_output_[YYYY]-[MM]-[DD]',
      mimeType: 'text/csv',
      rowDelimiter: '\r\n',
    });
  };

}
