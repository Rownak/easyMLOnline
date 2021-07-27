import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LogService } from '@app/services/log.service';

@Component({
  selector: 'app-k-means',
  templateUrl: './k-means.component.html',
  styleUrls: ['./k-means.component.scss']
})
export class KMeansComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  @Output() algorithmEmitter=new EventEmitter();

  constructor(private formBuilder: FormBuilder,private logger: LogService,) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      clusters: ['', Validators.required],
      runName: ['']
    });
    this.form.get('clusters').valueChanges.subscribe(value=>{this.logEvent('ASK2','Clusters value changed to '+value);});
    this.form.get('runName').valueChanges.subscribe(value=>{this.logEvent('ASK3','Run name value changed to '+value);});
  }

  get f() { return this.form.controls; }

  logEvent(id,event){
    this.logger.log(id,event).subscribe();
  }

  runAlgorithm(){
    this.submitted = true;

    if (this.form.invalid) {
      console.log("invalid form")
      return;
    }

    this.algorithmEmitter.emit({"clusters":this.f.clusters.value,"runName":this.f.runName.value});
  }

}
