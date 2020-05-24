import { Component, OnInit } from '@angular/core';
import { getTestBed } from '@angular/core/testing';

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

  flipHorizontal() {
    
  }


}
