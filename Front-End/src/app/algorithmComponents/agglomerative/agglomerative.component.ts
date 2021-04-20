import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agglomerative',
  templateUrl: './agglomerative.component.html',
  styleUrls: ['./agglomerative.component.scss']
})
export class AgglomerativeComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  @Output() algorithmEmitter=new EventEmitter();

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      clusters: ['', Validators.required],
      runName: ['']
    });
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

