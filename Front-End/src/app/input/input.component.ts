import { Component, OnInit } from '@angular/core';
import Handsontable from 'handsontable';
import { HotTableRegisterer } from '@handsontable/angular';
import { NgxCsvParser,NgxCSVParserError } from 'ngx-csv-parser';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  hotRegisterer = new HotTableRegisterer();
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

  constructor(private ngxCsvParser: NgxCsvParser) { }

  ngOnInit(): void {
  }

  handleFileInput(files: FileList){
    this.ngxCsvParser.parse(files[0], { header: false, delimiter: ',' })
      .pipe().subscribe((result: Array<any>) => {
        console.log('Result', result);
        this.csvRecords = result;
        this.hotRegisterer.getInstance(this.inputID).loadData(this.csvRecords)
      }, (error: NgxCSVParserError) => {
        console.log('Error', error);
      });
  }

}
