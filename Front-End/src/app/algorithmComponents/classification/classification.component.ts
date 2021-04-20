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
    colHeaders: true,
    rowHeaders: true,
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

}
