import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  value: string;

  constructor(private _route: Router) { }

  ngOnInit() {
  }
  login() {
    // this.value = data.form;
    if (this.value === 'admin') {
      this._route.navigate(['/products']);
    } else {
      alert('Enter Correct Details');
    }
  }
}
