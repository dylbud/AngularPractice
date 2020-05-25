import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form-example',
  templateUrl: './reactive-form-example.component.html',
  styleUrls: ['./reactive-form-example.component.css'],
})
export class ReactiveFormExampleComponent implements OnInit {
  form: FormGroup;
  password = new FormControl('', Validators.required);

  firstName = new FormControl('', Validators.required);

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      firstName: this.firstName,
      password: this.password,
    });
  }
  onSubmit() {
    console.log('reactive form submitted');
    console.log(this.form);
  }

  ngOnInit() {}
}
