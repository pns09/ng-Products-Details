import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  category = [
    { id: 1, name: 'development' },
    { id: 2, name: 'production' },
    { id: 3, name: 'testing' },

  ];
  constructor() { }

  ngOnInit() {
  }

}
