import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LogService } from '@app/services/log.service';
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
    height: 450,
    licenseKey: 'non-commercial-and-evaluation'
  };

  tableID: string = 'test-data-table';
  csvRecords: any[] = [];
  form: FormGroup;
  submitted = false;
  @Output() algorithmEmitter=new EventEmitter();

  constructor(private ngxCsvParser: NgxCsvParser,private formBuilder: FormBuilder,private logger: LogService,) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      labelsCol: ['', Validators.required],
      runName: ['']
    });
    this.form.get('labelsCol').valueChanges.subscribe(value=>{this.logEvent('ASC2','Labels Column value changed to '+value);});
    this.form.get('runName').valueChanges.subscribe(value=>{this.logEvent('ASC3','Run name value changed to '+value);});
    this.hooks.forEach((hook)=>{
      this.hotSettings[hook]=(...args)=>{
        this.logHook(hook,args);
      }
    });
  }

  logHook(event,data){
    this.logEvent('ASC6','[' + event + ']' + data);
  }

  logEvent(id,event){
    this.logger.log(id,event).subscribe();
  }

  get f() { return this.form.controls; }

  handleFileInput(files: FileList,value:any){
    this.ngxCsvParser.parse(files[0], { header: false, delimiter: ',' })
      .pipe().subscribe((result: Array<any>) => {
        this.csvRecords = result;
        this.hotRegisterer.getInstance(this.tableID).loadData(this.csvRecords)
        this.logEvent("ASC4","Classification file loaded");
      }, (error: NgxCSVParserError) => {
        console.log('Error', error);
      });
    value="";
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
    this.logEvent("ASC5","Classification data downloaded");
  };

}
