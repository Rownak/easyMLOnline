import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-db-scan',
  templateUrl: './db-scan.component.html',
  styleUrls: ['./db-scan.component.scss']
})
export class DbScanComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  @Output() algorithmEmitter=new EventEmitter();

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      samples: ['', Validators.required],
      eps: ['', Validators.required],
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

    this.algorithmEmitter.emit({"samples":this.f.samples.value,"eps":this.f.eps.value,"runName":this.f.runName.value});
  }

}
