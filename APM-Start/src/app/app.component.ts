import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
  pageTitle: string = 'Acme Product Management';
  
  constructor() { }

  ngOnInit() { }
}