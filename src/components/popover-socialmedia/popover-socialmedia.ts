import { Component } from '@angular/core';

@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class PopoverSocialMedia {

  text: string;

  constructor() {
    console.log('Hello PopoverComponent Component');
    this.text = 'Hello World';
  }

}
