import { Component, Input, OnInit } from '@angular/core';
import Handsontable from 'handsontable';
import { environment } from '@environments/environment';
import { HotTableRegisterer } from '@handsontable/angular';
import { InputComponent } from '../../input/input.component';

@Component({
  selector: 'app-kmeans-results',
  templateUrl: './kmeans-results.component.html',
  styleUrls: ['./kmeans-results.component.scss']
})
export class KmeansResultsComponent implements OnInit {

  @Input() data;
  private hotRegisterer = new HotTableRegisterer();
  private inputComponent: InputComponent;
  hotSettings: Handsontable.GridSettings= {

    colHeaders: function(index) {
      return 'Attribute '+ index;
    },
    rowHeaders: function(index) {
      return 'Object '+ index;
    },
    contextMenu: true,
    
    rowHeaderWidth: 75,
    width: '100%',
    height: '100%',
    licenseKey: 'non-commercial-and-evaluation'
  };

  resultID: string = 'result-table';
  ssd:number = 0.0;
  score:number =0.0;
  plotLink:string ="";
  tableData;

  constructor() { }

  ngOnInit(): void {
    this.score=this.data["silhouette_score"];
    this.ssd=this.data["ssd"]
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
      filename: 'kmeans_output_[YYYY]-[MM]-[DD]',
      mimeType: 'text/csv',
      rowDelimiter: '\r\n',
    });
  };

}
