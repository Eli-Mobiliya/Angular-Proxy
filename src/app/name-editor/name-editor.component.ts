import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {
  forbiddenNameValidator,
  alwayValidNameValidator,
} from './name-editor.validator';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss'],
})
export class NameEditorComponent implements OnInit {
  // name = new FormControl('ABC');
  // name = new FormControl('');

  // name = new FormControl(null, Validators.required);
  // name = new FormControl(null, forbiddenNameValidator(/bob/i));

  // name = new FormControl(null, alwayValidNameValidator());
  name = new FormControl('.', alwayValidNameValidator());

  constructor() {}

  ngOnInit() {
    console.log('ngOnInit', this.name.valid);

    setTimeout(() => {
      console.log('ngOnInit->setTimeout', this.name.valid);
      this.name.updateValueAndValidity();
    }, 1 * 1000);

    setTimeout(() => {
      console.log('ngOnInit->setTimeout', this.name.valid);
    }, 3 * 1000);

    setTimeout(() => {
      console.log('ngOnInit->setTimeout', this.name.valid);
    }, 5 * 1000);
  }
}
