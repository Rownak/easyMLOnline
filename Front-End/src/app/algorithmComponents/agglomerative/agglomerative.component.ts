import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LogService } from '@app/services/log.service';

@Component({
  selector: 'app-agglomerative',
  templateUrl: './agglomerative.component.html',
  styleUrls: ['./agglomerative.component.scss']
})
export class AgglomerativeComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  @Output() algorithmEmitter=new EventEmitter();

  constructor(private formBuilder: FormBuilder,private logger: LogService,) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      clusters: ['', Validators.required],
      runName: ['']
    });
    this.form.get('clusters').valueChanges.subscribe(value=>{this.logEvent('ASA2','Clusters value changed to '+value);});
    this.form.get('runName').valueChanges.subscribe(value=>{this.logEvent('ASA3','Run name value changed to '+value);});
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

    this.algorithmEmitter.emit({"clusters":this.f.clusters.value,"runName":this.f.runName.value});
  }

}

