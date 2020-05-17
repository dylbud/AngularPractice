import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flip-image',
  templateUrl: './flip-image.component.html',
  styleUrls: ['./flip-image.component.css']
})
export class FlipImageComponent implements OnInit {

  imageUrl = 'assets/images/cat.jpg';
  constructor() { }

  ngOnInit() {
  }

}
