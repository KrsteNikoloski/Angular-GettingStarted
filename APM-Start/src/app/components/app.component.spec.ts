import { TestBed, async } from "@angular/core/testing";

import { AppRoutingModule } from "../app-routing.module";
import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./home/welcome.component";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule],
      declarations: [AppComponent, WelcomeComponent]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Acme Product Management'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.pageTitle).toEqual("Acme Product Management");
  });

  it("should render title in a navbar-brand class", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(".navbar-brand").textContent).toContain(
      "Acme Product Management"
    );
  });
});
