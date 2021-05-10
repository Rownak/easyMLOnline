import { Component, OnInit } from '@angular/core';
import { StudentsActivityService } from '../services/students-activity.service';

@Component({
  selector: 'app-teacher-view',
  templateUrl: './teacher-view.component.html',
  styleUrls: ['./teacher-view.component.scss']
})
export class TeacherViewComponent implements OnInit {
  studentActivities: any = [];
  allActivitySelected = false;
  activityByCourseSelected = false;
  constructor(
    private studentsActivityService: StudentsActivityService) { }

  ngOnInit(): void {
    this.studentsActivityService.getAllStudentActivity().subscribe(
      data => {
        this.studentActivities = data;
        
      },
      error => console.log(error)
    );
    
  }
  allStudentActivities(){
    this.allActivitySelected = true;
    this.activityByCourseSelected = false;
  }
  activityByCourse(){
    this.allActivitySelected = false;
    this.activityByCourseSelected = true;
  }

}
