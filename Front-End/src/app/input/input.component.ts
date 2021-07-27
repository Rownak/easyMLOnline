import { LogService } from './../services/log.service';
import { Component, OnInit, } from '@angular/core';
import Handsontable from 'handsontable';
import { HotTableRegisterer } from '@handsontable/angular';
import { NgxCsvParser,NgxCSVParserError } from 'ngx-csv-parser';
import { FormControl } from '@angular/forms';
import { JsonpClientBackend } from '@angular/common/http';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  hotRegisterer = new HotTableRegisterer();
  hooks = ['afterBeginEditing','afterChange','afterContextMenuShow','afterContextMenuHide','afterCopy','afterCreateCol','afterCreateRow','afterCut','afterPaste','afterRemoveCol','afterRemoveRow','afterSelection','afterUndo']
  hotSettings: Handsontable.GridSettings= {
    startRows: 50,
    startCols: 50,
    colHeaders: function(index) {
      return 'Attribute '+ index;
    },
    rowHeaders: function(index) {
      return 'Object '+ index;
    },
    rowHeaderWidth: 100,
    contextMenu: true,
    width: '100%',
    height: 650,
    licenseKey: 'non-commercial-and-evaluation'
  };

  header= new FormControl(true);

  inputID: string = 'input-table';

  csvRecords: any[] = [];

  error:string;



  constructor(private ngxCsvParser: NgxCsvParser,
    private logger: LogService) { }

  ngOnInit(): void {
    this.header.valueChanges.subscribe(value=>{this.logEvent('IS6','Header checkbox changed to '+value);});
    this.hooks.forEach((hook)=>{
      this.hotSettings[hook]=(...args)=>{
        this.logHook(hook,args);
      }
    });
  }

  logHook(event,data){
    this.logEvent('IS8','[' + event + ']' + data);
  }

  logEvent(id,event){
    this.logger.log(id,event).subscribe();
  }

  handleFileInput(files: FileList){
    this.ngxCsvParser.parse(files[0], { header: false, delimiter: ',' })
      .pipe().subscribe((result: Array<any>) => {
        this.csvRecords = result;
        this.hotRegisterer.getInstance(this.inputID).loadData(this.csvRecords);
        this.logEvent("IS5","Input file loaded");

      }, (error: NgxCSVParserError) => {
        console.log('Error', error);
      });
  }

  public exportCSV(event: any) { // without type info

    let exportPlugin1 = this.hotRegisterer.getInstance(this.inputID).getPlugin('exportFile');

     exportPlugin1.downloadFile('csv', {
      bom: false,
      columnDelimiter: ',',
      columnHeaders: false,
      rowHeaders: false,
      exportHiddenColumns: true,
      exportHiddenRows: true,
      fileExtension: 'csv',
      filename: 'input-file_[YYYY]-[MM]-[DD]',
      mimeType: 'text/csv',
      rowDelimiter: '\r\n',
    });

    this.logEvent("IS7","Input data downloaded");
  };

}
