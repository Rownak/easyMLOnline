import { Component, Input, OnInit } from '@angular/core';
import { environment } from '@environments/environment';
import Handsontable from 'handsontable';
import { HotTableRegisterer } from '@handsontable/angular';
import { LogService } from '@app/services/log.service';
@Component({
  selector: 'app-dbscan-results',
  templateUrl: './dbscan-results.component.html',
  styleUrls: ['./dbscan-results.component.scss']
})
export class DbscanResultsComponent implements OnInit {

  @Input() data;
  private hotRegisterer = new HotTableRegisterer();
  hooks = ['afterBeginEditing','afterChange','afterContextMenuShow','afterContextMenuHide','afterCopy','afterCreateCol','afterCreateRow','afterCut','afterPaste','afterRemoveCol','afterRemoveRow','afterSelection','afterUndo']
  hotSettings: Handsontable.GridSettings= {
    colHeaders: function(index) {
      if(index==0){
        return 'Labels';
      }
      return 'Attribute '+ String(Number(index)-1);
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

  constructor(private logger: LogService,) { }

  ngOnInit(): void {
    this.score=this.data["silhouette_score"];
    this.plotLink=`${environment.apiUrl}/api/`+this.data["plt_url"];
    this.tableData=this.data["input_output"];
    this.hooks.forEach((hook)=>{
      this.hotSettings[hook]=(...args)=>{
        this.logHook(hook,args);
      }
    });
  }

  logHook(event,data){
    this.logEvent('RSD1','[' + event + ']' + data);
  }

  logEvent(id,event){
    this.logger.log(id,event).subscribe();
  }

  public exportCSV(event: any) { // without type info

    let exportPlugin1 = this.hotRegisterer.getInstance(this.resultID).getPlugin('exportFile');

     exportPlugin1.downloadFile('csv', {
      bom: false,
      columnDelimiter: ',',
      columnHeaders: true,
      rowHeaders: true,
      exportHiddenColumns: true,
      exportHiddenRows: true,
      fileExtension: 'csv',
      filename: 'dbScan_output_[YYYY]-[MM]-[DD]',
      mimeType: 'text/csv',
      rowDelimiter: '\r\n',
    });
    this.logEvent("RSD2","Results Section DBScan output downloaded");
  };

}
