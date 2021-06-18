import { InputComponent } from './../input/input.component';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Tab } from '@app/models'
import { AlgorithmsService } from '@app/services';
import { first } from 'rxjs/operators';
import { NgxSpinnerService } from "ngx-spinner";
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  @ViewChild('regModal') modal
  modalRef: BsModalRef;
  title: string;
  message: string;
  @ViewChild(InputComponent)

  private inputComponent: InputComponent;
  selectedAlgorithm: string;
  tabs: Tab[];
  private tabCounter: number;

  constructor(private algorithmsService: AlgorithmsService, private spinner: NgxSpinnerService, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.selectedAlgorithm="";
    this.tabCounter=0;
    this.tabs=[];
  }

  setAlgorithm(value:string){
    this.selectedAlgorithm=value;
  }

  notNull(value){
    return value!=null;
  }


  runAlgorithm(values){
    var inputData=this.inputComponent.hotRegisterer.getInstance(this.inputComponent.inputID).getData();
    // var temp =[]
    // for(var arr in inputData){
    //   inputData[arr]=inputData[arr].filter(this.notNull)
    //   if (inputData[arr].length!=0){
    //     temp.push(inputData[arr])
    //   }
    // }
    // console.log(temp)
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
            this.message='';
            this.title='Data error';
            for(let key in error.error){
              for(let message in error.error[key])
              this.message+=error.error[key][message]+"\n";
            }
            this.openModal(this.modal);


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
          this.message='';
          this.title='Data error';
          for(let key in error.error){
            for(let message in error.error[key])
            this.message+=error.error[key][message]+"\n";
          }
          this.openModal(this.modal);

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
          this.message='';
          this.title='Data error';
          for(let key in error.error){
            for(let message in error.error[key])
            this.message+=error.error[key][message]+"\n";
          }
          this.openModal(this.modal);

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
          this.message='';
          this.title='Data error';
          for(let key in error.error){
            for(let message in error.error[key])
            this.message+=error.error[key][message]+"\n";
          }
          this.openModal(this.modal);

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
          this.message='';
          this.title='Data error';
          for(let key in error.error){
            for(let message in error.error[key])
            this.message+=error.error[key][message]+"\n";
          }
          this.openModal(this.modal);

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
          this.message='';
          this.title='Data error';
          for(let key in error.error){
            for(let message in error.error[key])
            this.message+=error.error[key][message]+"\n";
          }
          this.openModal(this.modal);

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

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


}
