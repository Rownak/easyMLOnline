import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HotTableModule } from '@handsontable/angular';
import { NgxCsvParserModule } from 'ngx-csv-parser';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { InputComponent } from './input/input.component';
import { JwtInterceptor} from './helpers/jwt.interceptor';
import { KMeansComponent } from './algorithmComponents/k-means/k-means.component';
import { DbScanComponent } from './algorithmComponents/db-scan/db-scan.component';
import { AgglomerativeComponent } from './algorithmComponents/agglomerative/agglomerative.component';
import { KmeansResultsComponent } from './results/kmeans-results/kmeans-results.component';
import { DbscanResultsComponent } from './results/dbscan-results/dbscan-results.component';
import { AgglomerativeResultsComponent } from './results/agglomerative-results/agglomerative-results.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClassificationComponent } from './algorithmComponents/classification/classification.component';
import { ClassificationResultsComponent } from './results/classification-results/classification-results.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { TeacherViewComponent } from './teacher-view/teacher-view.component';
import { AllStudentsActivityComponent } from './teacher-view/all-students-activity/all-students-activity.component';
import { DataTablesModule } from 'angular-datatables';
import { ActivityByCourseComponent } from './teacher-view/activity-by-course/activity-by-course.component';
import { NgSelectModule } from '@ng-select/ng-select';
// npm install jquery --save
// npm install datatables.net --save
// npm install datatables.net-dt --save
// npm install angular-datatables --save
// npm install @types/jquery --save-dev
// npm install @types/datatables.net --save-dev


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    NavbarComponent,
    MainComponent,
    InputComponent,
    KMeansComponent,
    DbScanComponent,
    AgglomerativeComponent,
    KmeansResultsComponent,
    DbscanResultsComponent,
    AgglomerativeResultsComponent,
    ClassificationComponent,
    ClassificationResultsComponent,
    TeacherViewComponent,
    AllStudentsActivityComponent,
    ActivityByCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HotTableModule.forRoot(),
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    NgxSpinnerModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxCsvParserModule,
    DataTablesModule,
    NgSelectModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
