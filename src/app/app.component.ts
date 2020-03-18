import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  valueChange: any;
  submitted = false;

  ngOnInit() {
    this.projectForm = new FormGroup({
      pname: new FormControl(null, Validators.required),
      pemail: new FormControl(null, [Validators.required, Validators.email]),
      pstatus: new FormControl(null, Validators.required)
    });

    this.projectForm.valueChanges.subscribe(changes => {
      this.valueChange = changes;
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.projectForm.valid) {
      alert("Submitted");
      this.submitted = false;
      this.projectForm.reset();
    }
  }
}
