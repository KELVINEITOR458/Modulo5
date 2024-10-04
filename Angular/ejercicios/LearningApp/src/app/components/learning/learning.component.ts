import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/Course';
import { CourseViewComponent } from "../course-view/course-view.component";
import { CourseStudentsComponent } from "../course-students/course-students.component";

@Component({
  selector: 'app-learning',
  standalone: true,
  imports: [CourseViewComponent, CourseStudentsComponent],
  templateUrl: './learning.component.html',
})
export class LearningComponent implements OnInit{

    course!: Course;

    constructor(private service: CourseService){}
  ngOnInit(): void {
    this.course = this.service.getCourse();
  }
}
