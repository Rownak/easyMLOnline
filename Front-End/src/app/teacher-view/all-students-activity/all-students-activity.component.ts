import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-all-students-activity',
  templateUrl: './all-students-activity.component.html',
  styleUrls: ['./all-students-activity.component.scss']
})
export class AllStudentsActivityComponent implements OnInit {
  @Input() studentActivities = [];
  dtOptions: DataTables.Settings = {};
  constructor(
  ) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    console.log(this.studentActivities);
  }

}
