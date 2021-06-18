import { Component, Input, OnInit } from '@angular/core';
import { environment } from '@environments/environment';
import { HotTableRegisterer } from '@handsontable/angular';
import Handsontable from 'handsontable';

@Component({
  selector: 'app-classification-results',
  templateUrl: './classification-results.component.html',
  styleUrls: ['./classification-results.component.scss']
})
export class ClassificationResultsComponent implements OnInit {

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

  // @Input() resultID: string;
  resultID: string = 'result-table';
  plotLink:string ="";
  tableData;

  constructor() { }

  ngOnInit(): void {
    this.plotLink=`${environment.apiUrl}/api/`+this.data["plt_url"];
    this.tableData=this.data["test_output"];
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
