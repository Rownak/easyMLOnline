import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LogService } from '@app/services/log.service';

@Component({
  selector: 'app-db-scan',
  templateUrl: './db-scan.component.html',
  styleUrls: ['./db-scan.component.scss']
})
export class DbScanComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  @Output() algorithmEmitter=new EventEmitter();

  constructor(private formBuilder: FormBuilder,private logger: LogService,) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      samples: ['', Validators.required],
      eps: ['', Validators.required],
      runName: ['']
    });
    this.form.get('samples').valueChanges.subscribe(value=>{this.logEvent('ASD2','Samples value changed to '+value);});
    this.form.get('eps').valueChanges.subscribe(value=>{this.logEvent('ASD3','EPS value changed to '+value);});
    this.form.get('runName').valueChanges.subscribe(value=>{this.logEvent('ASD4','Run Name value changed to '+value);});
  }

  logEvent(id,event){
    this.logger.log(id,event).subscribe();
  }

  get f() { return this.form.controls; }

  runAlgorithm(){
    this.submitted = true;

    if (this.form.invalid) {
      console.log("invalid form")
      return;
    }

    this.algorithmEmitter.emit({"samples":this.f.samples.value,"eps":this.f.eps.value,"runName":this.f.runName.value});
  }

}
