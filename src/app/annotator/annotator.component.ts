import { Component, OnInit } from '@angular/core';
import { Annotorious } from '@recogito/annotorious';

@Component({
  selector: 'app-annotator',
  templateUrl: './annotator.component.html',
  styleUrls: ['./annotator.component.css']
})
export class AnnotatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const anno = new Annotorious({
      image: 'hallstatt', locale: 'auto',
      widgets: ['COMMENT', { widget: 'TAG', vocabulary: ['Animal', 'Building', 'Waterbody'] }]
    });
  }

}
