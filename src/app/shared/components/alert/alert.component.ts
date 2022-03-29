import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  @Input() type = 'primary';

  constructor() { }

  ngOnInit(): void {
  }

  get getType(){
    return this.type ? `alert alert-${this.type}` : 'alert';
  }

}
