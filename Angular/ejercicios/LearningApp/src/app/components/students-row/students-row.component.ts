import { Component, Input } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/Course';
import { Student } from '../../models/Student';

@Component({
  selector: 'tr[students-row]',
  standalone: true,
  imports: [],
  templateUrl: './students-row.component.html',
})
export class StudentsRowComponent {
  @Input()item!:Student
}
