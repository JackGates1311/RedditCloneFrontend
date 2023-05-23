import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FlairService} from "./flairService";
import {FlairRequestPayload} from "./flairRequestPayload";

@Component({
  selector: 'app-flair',
  templateUrl: './flair.component.html',
  styleUrls: ['./flair.component.scss']
})
export class FlairComponent implements OnInit {

  @Output() flairValue = new EventEmitter<string>();

  addFlairForm: FormGroup;
  flairRequestPayload: FlairRequestPayload;

  constructor(private flairService: FlairService) {
    this.flairRequestPayload = {
      name: ''
    };
  }

  ngOnInit(): void {
    this.addFlairForm = new FormGroup({
      flairName: new FormControl('', [Validators.required,
        Validators.minLength(3), Validators.pattern('^[^0-9]+$')])
    });
  }

  addFlair() {

    this.getDataFromFormGroup();

    this.flairService.addFlair(this.flairRequestPayload).subscribe(() => {
      this.addFlairForm.reset();
      this.flairValue.emit(this.flairRequestPayload.name);
      alert("New flair added successfully");
    }, error => {
      if(error.status === 403) {
        alert("Your session has been expired, please log in again!");
      } else {
        alert("Error occurred while adding flair because of database error (maybe provided flair name already " +
            "exists)");
      }
    });
  }

  private getDataFromFormGroup() {
    this.flairRequestPayload.name = this.addFlairForm.get('flairName').value.trim().toLowerCase();
  }
}
