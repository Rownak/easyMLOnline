import { LogService } from './../services/log.service';
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

  constructor(private algorithmsService: AlgorithmsService,
    private spinner: NgxSpinnerService,
    private modalService: BsModalService,
    private logger: LogService) { }

  ngOnInit(): void {
    this.selectedAlgorithm="";
    this.tabCounter=0;
    this.tabs=[];
    this.logEvent('M1',"Main page loaded");
  }

  setAlgorithm(value:string){
    this.selectedAlgorithm=value;
    this.logger.log('AS4',this.selectedAlgorithm+" Algorithm Selected").subscribe();
  }

  notNull(value){
    return value!=null;
  }

  logEvent(id,event){
    this.logger.log(id,event).subscribe();
  }


  runAlgorithm(values){
    var inputData=this.inputComponent.hotRegisterer.getInstance(this.inputComponent.inputID).getData();
    var header = this.inputComponent.header.value;
    this.logger.log('AS5',"Run algorithm clicked with " +this.selectedAlgorithm).subscribe();
    this.spinner.show();
    switch(this.selectedAlgorithm){
      case "K-Means":{
        this.algorithmsService.kmeans(values.clusters,inputData, header)
        .pipe(first())
        .subscribe(
        data => {this.createTab(values.runName,true,data,this.selectedAlgorithm);this.spinner.hide();},
        error => {
          this.displayError(error);
        });

        break;
      }
      case "DBSCAN":{
        this.algorithmsService.dbscan(values.eps,values.samples,inputData,header)
        .pipe(first())
        .subscribe(
        data => {this.createTab(values.runName,true,data,this.selectedAlgorithm);this.spinner.hide();},
        error => {
          this.displayError(error);
        });
        break;
      }
      case "Agglomerative":{
        this.algorithmsService.agglomerative(values.clusters,inputData,header)
        .pipe(first())
        .subscribe(
        data => {this.createTab(values.runName,true,data,this.selectedAlgorithm);this.spinner.hide();},
        error => {
          this.displayError(error);
        });
        break;
      }
      case "KNN":{
        this.algorithmsService.knn(values.labelsCol,5,inputData,values.testData,header)
        .pipe(first())
        .subscribe(
        data => {this.createTab(values.runName,true,data,this.selectedAlgorithm);this.spinner.hide();},
        error => {
          this.displayError(error);
        });
        break;
      }
      case "NaiveBayes":{
        this.algorithmsService.naivebayes(values.labelsCol,inputData,values.testData,header)
        .pipe(first())
        .subscribe(
        data => {this.createTab(values.runName,true,data,this.selectedAlgorithm);this.spinner.hide();},
        error => {
          this.displayError(error);
        });
        break;
      }
      case "SVM":{
        this.algorithmsService.svm(values.labelsCol,inputData,values.testData,header)
        .pipe(first())
        .subscribe(
        data => {this.createTab(values.runName,true,data,this.selectedAlgorithm);this.spinner.hide();},
        error => {
          this.displayError(error);
        });
        break;
      }
    }

  }

  displayError(error){
    this.spinner.hide();
    this.message='';
    this.title='Data error';
    if (error.status==413){
      this.message="File size bigger than the maximum 2MB limit. Please use a smaller file."
    }else{
      for(let key in error.error){
        for(let message in error.error[key])
        this.message+=error.error[key][message]+"\n";
      }
    }
    this.openModal(this.modal);
  }

  createTab(id:string,active:boolean,contentData:any,type:string){
    this.tabCounter++;
    if (id){
      var newTab: Tab = {id,active,contentData,type};
    }else{
      id = type+" "+this.tabCounter;
      var newTab: Tab = {id,active,contentData,type};
    }
    this.tabs.forEach(function(value){
      value.active=false
    });
    this.tabs.push(newTab);
    this.logger.log('RS1',"New results tab created with name " + id).subscribe();
  }

  removeTabHandler(tab: any): void {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
    this.logger.log('RS1',"Closed tab with name "+tab.id).subscribe();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


}
