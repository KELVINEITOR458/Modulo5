import { Component, Input, input } from '@angular/core';
import { Course } from '../../models/Course';

@Component({
  selector: 'course-view',
  standalone: true,
  imports: [],
  templateUrl: './course-view.component.html',
})
export class CourseViewComponent {
  @Input()course!:Course
}
