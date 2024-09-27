import { Injectable } from '@angular/core';
import { Course } from '../models/Course';
import { LearningData } from '../data/learnings';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private course: Course = LearningData;
  constructor() { }
  getCourse():  Course{
    return this.course
  }
}
