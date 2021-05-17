import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-all-students-activity',
  templateUrl: './all-students-activity.component.html',
  styleUrls: ['./all-students-activity.component.scss']
})
export class AllStudentsActivityComponent implements OnInit {
  @Input() studentActivities = [];
  dtOptions: any = {};
  constructor(
  ) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
      dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'print'
        ]
    };
    console.log(this.studentActivities);
  }

}
