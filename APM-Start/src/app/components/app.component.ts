import { Component, OnInit } from "@angular/core";

@Component({
  selector: "pm-root",
  templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
  pageTitle = "Acme Product Management";

  constructor() {}

  ngOnInit() {}
}
