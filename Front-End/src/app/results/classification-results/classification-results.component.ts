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

  @Input() resultID: string;
  plotLink:string ="";
  tableData;

  constructor() { }

  ngOnInit(): void {
    this.plotLink=`${environment.apiUrl}/api/`+this.data["plt_url"];
    this.tableData=this.data["test_output"];
  }

}
