import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Subscription, Observable } from "rxjs";
import { resolve } from "url";
import { CustomValidators } from "./custom-validators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  valueChange: any;
  submitted = false;
  statusList = ["Stable", "Critical", "Finished"];

  ngOnInit() {
    this.projectForm = new FormGroup({
      pname: new FormControl(
        null,
        Validators.required, 
        CustomValidators.forbiddenNameValidatorAsync
      ),
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
    console.log(this.projectForm)
  }

}
