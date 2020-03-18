import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  valueSubscription: Subscription;

  ngOnInit(){
    this.valueSubscription = this.projectForm.valueChanges.subscribe( (changes) => {
      this.valueSubscription = changes;
    });
  }

}
