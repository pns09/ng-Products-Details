import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() rating: number;
  @Output() ratingtoparent: EventEmitter<string> = new EventEmitter;

  rate: any = [];
  constructor() { }
  ngOnInit() {
    this.rate = Array(Math.round(this.rating)).fill(0);
  }
  onclick() {
    this.ratingtoparent.emit('rating value = ' + this.rating);
  }

}
