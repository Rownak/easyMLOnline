import { AfterViewInit, Component,OnDestroy, OnInit, Input, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from "rxjs"
@Component({
  selector: 'app-activity-by-course',
  templateUrl: './activity-by-course.component.html',
  styleUrls: ['./activity-by-course.component.scss']
})
export class ActivityByCourseComponent implements AfterViewInit, OnDestroy, OnInit {


  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  @Input() studentActivities = [];
  seletedCourseActivity = [];
  courseSelect = null;
  courses = [{id:1, name:"CS-1000"}, {id:2, name:"HSD-500"}, {id:3, name:"CEHC-200"}];
  constructor(
  ) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    console.log("student activities", this.studentActivities);
  }
  onOptionsSelected(event){

    const course = event.target.value
    this.seletedCourseActivity = this.studentActivities.filter(act => act.user_course == course)
    console.log(this.seletedCourseActivity)
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }
  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
