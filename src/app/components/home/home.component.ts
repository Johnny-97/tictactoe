import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  private _form = this.fb.group({
    input: ['']
  });

  get form(){
    return this._form;
  }

  get input(){
    return this.form.get('input');
  }

  ngOnInit(): void {
  }

}
