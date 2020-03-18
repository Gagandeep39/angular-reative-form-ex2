import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Subscription, Observable } from "rxjs";
import { resolve } from "url";

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
        this.forbiddenNameValidator
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

  forbiddenNameValidator(
    control: FormControl
  ): Promise<any> | Observable<any> | any {
    const promise = new Promise((resolve, reject) => {
      setInterval(() => {
        if (control.value === "Test") resolve({ 'nameIsForbidden': true });
        else resolve(null);
      }, 1000);
    });
    return promise;
  }
}
