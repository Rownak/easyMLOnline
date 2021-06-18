import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotTableRegisterer } from '@handsontable/angular';
import Handsontable from 'handsontable';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';

@Component({
  selector: 'app-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.scss']
})
export class ClassificationComponent implements OnInit {

  @Input() title: string;

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
    height: 450,
    licenseKey: 'non-commercial-and-evaluation'
  };

  tableID: string = 'test-data-table';
  csvRecords: any[] = [];
  form: FormGroup;
  submitted = false;
  @Output() algorithmEmitter=new EventEmitter();

  constructor(private ngxCsvParser: NgxCsvParser,private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      labelsCol: ['', Validators.required],
      runName: ['']
    });
  }

  get f() { return this.form.controls; }

  handleFileInput(files: FileList){
    this.ngxCsvParser.parse(files[0], { header: false, delimiter: ',' })
      .pipe().subscribe((result: Array<any>) => {
        console.log('Result', result);
        this.csvRecords = result;
        this.hotRegisterer.getInstance(this.tableID).loadData(this.csvRecords)
      }, (error: NgxCSVParserError) => {
        console.log('Error', error);
      });
  }

  runAlgorithm(){
    this.submitted = true;

    if (this.form.invalid) {
      console.log("invalid form")
      return;
    }

    this.algorithmEmitter.emit({"labelsCol":this.f.labelsCol.value,"testData":this.hotRegisterer.getInstance(this.tableID).getData(),"runName":this.f.runName.value,});
  }
  public exportCSV(event: any) { // without type info
    let exportPlugin1 = this.hotRegisterer.getInstance(this.tableID).getPlugin('exportFile');
    
     exportPlugin1.downloadFile('csv', {
      bom: false,
      columnDelimiter: ',',
      columnHeaders: true,
      rowHeaders: true,
      exportHiddenColumns: true,
      exportHiddenRows: true,
      fileExtension: 'csv',
      filename: this.title+'_test_[YYYY]-[MM]-[DD]',
      mimeType: 'text/csv',
      rowDelimiter: '\r\n',
    });
  };

}
