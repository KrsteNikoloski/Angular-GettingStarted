import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "pm-star",
  templateUrl: "./star.component.html",
  styleUrls: ["./star.component.css"]
})
export class StarComponent {
  starWidth: number;
  private _rating: number;
  public get rating(): number {
    return this._rating;
  }
  @Input()
  public set rating(value: number) {
    this._rating = value;
    this.starWidth = (75 / 5) * this.rating;
  }
  @Output()
  ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  onClick(): void {
    this.ratingClicked.emit(`The rating is ${this.rating}`);
  }
}
