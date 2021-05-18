import { InputComponent } from './../input/input.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Tab } from '@app/models'
import { AlgorithmsService } from '@app/services';
import { first } from 'rxjs/operators';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild(InputComponent)
  private inputComponent: InputComponent;
  selectedAlgorithm: string;
  tabs: Tab[];
  private tabCounter: number;

  constructor(private algorithmsService: AlgorithmsService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.selectedAlgorithm="";
    this.tabCounter=0;
    this.tabs=[];
  }

  setAlgorithm(value:string){
    this.selectedAlgorithm=value;
  }

  runAlgorithm(values){
    var inputData=this.inputComponent.hotRegisterer.getInstance(this.inputComponent.inputID).getData();
    var header = this.inputComponent.header.value;
    this.spinner.show();
    switch(this.selectedAlgorithm){
      case "K-Means":{
        this.algorithmsService.kmeans(values.clusters,inputData, header)
        .pipe(first())
        .subscribe(
        data => {this.createTab(values.runName,data,this.selectedAlgorithm);this.spinner.hide();},
        error => {
            console.log(error.error.message);
            this.spinner.hide();
            alert("An error occurred while calculating the results.\n Please check your data and try again.")

        });

        break;
      }
      case "DBSCAN":{
        this.algorithmsService.dbscan(values.eps,values.samples,inputData,header)
        .pipe(first())
        .subscribe(
        data => {this.createTab(values.runName,data,this.selectedAlgorithm);this.spinner.hide();},
        error => {
          console.log(error.error.message);
          this.spinner.hide();
          alert("An error occurred while calculating the results.\n Please check your data and try again.")

        });
        break;
      }
      case "Agglomerative":{
        this.algorithmsService.agglomerative(values.clusters,inputData,header)
        .pipe(first())
        .subscribe(
        data => {this.createTab(values.runName,data,this.selectedAlgorithm);this.spinner.hide();},
        error => {
          console.log(error.error.message);
          this.spinner.hide();
          alert("An error occurred while calculating the results.\n Please check your data and try again.")

        });
        break;
      }
      case "KNN":{
        this.algorithmsService.knn(values.labelsCol,5,inputData,values.testData,header)
        .pipe(first())
        .subscribe(
        data => {this.createTab(values.runName,data,this.selectedAlgorithm);this.spinner.hide();},
        error => {
          console.log(error.error.message);
          this.spinner.hide();
          alert("An error occurred while calculating the results.\n Please check your data and try again.")

        });
        break;
      }
      case "NaiveBayes":{
        this.algorithmsService.naivebayes(values.labelsCol,inputData,values.testData,header)
        .pipe(first())
        .subscribe(
        data => {this.createTab(values.runName,data,this.selectedAlgorithm);this.spinner.hide();},
        error => {
          console.log(error.error.message);
          this.spinner.hide();
          alert("An error occurred while calculating the results.\n Please check your data and try again.")

        });
        break;
      }
      case "SVM":{
        this.algorithmsService.svm(values.labelsCol,inputData,values.testData,header)
        .pipe(first())
        .subscribe(
        data => {this.createTab(values.runName,data,this.selectedAlgorithm);this.spinner.hide();},
        error => {
          console.log(error.error.message);
          this.spinner.hide();
          alert("An error occurred while calculating the results.\n Please check your data and try again.")

        });
        break;
      }
    }

  }

  createTab(id:string,contentData:any,type:string){
    this.tabCounter++;
    if (id){
      var newTab: Tab = {id,contentData,type};
    }else{
      id = type+this.tabCounter;
      var newTab: Tab = {id,contentData,type};
    }
    this.tabs.push(newTab);
  }

  removeTabHandler(tab: any): void {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
    console.log('Remove Tab handler');
  }


}
