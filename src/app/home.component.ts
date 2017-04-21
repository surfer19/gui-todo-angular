import {Component, NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
//import { InputBoxComponent } from 'inputBox.component';

@Component({
  //selector: 'my-app',
  templateUrl: './home.component.html',
})

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class HomeComponent {
  main_title: string;
  subtitles;

  constructor() {
    this.main_title = 'TODAY I ...';

    this.subtitles = [
      { must: 'Must do' },
      { want: 'Want do' },
      { meet: 'Meet' },
      { new_things: 'New learned things' },
      { feelings: 'My feelings' }
    ]
  }
}

