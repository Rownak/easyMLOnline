import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, Input } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-all-students-activity',
  templateUrl: './all-students-activity.component.html',
  styleUrls: ['./all-students-activity.component.scss']
})
export class AllStudentsActivityComponent implements AfterViewInit, OnDestroy, OnInit {
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  @Input() studentActivities = [];
  dtOptions: any  = {};
  dtTrigger: Subject<any> = new Subject()

  constructor(
  ) { }

  ngOnInit(): void {
    this.dtOptions = {
      // pagingType: 'full_numbers',
      pageLength: 10,
      lengthMenu: [ [10, 25, 50, -1], [10, 25, 50, "All"] ],
      processing: true,
      dom: 'Bfrtip',
        buttons: [
            'csv', 'excel', 'print'
        ]
    };
    console.log(this.studentActivities);
  }
  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
