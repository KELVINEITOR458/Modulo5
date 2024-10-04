import { Component, Input } from '@angular/core';
import { Course } from '../../models/Course';
import { StudentsRowComponent } from '../students-row/students-row.component';

@Component({
  selector: 'course-students',
  standalone: true,
  imports: [StudentsRowComponent],
  templateUrl: './course-students.component.html',
})
export class CourseStudentsComponent {
  @Input()course!:Course
}
