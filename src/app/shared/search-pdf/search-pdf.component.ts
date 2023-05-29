import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {environment} from "../../../environments/environment";
import {SearchService} from "./searchService";

@Component({
  selector: 'app-search-pdf',
  templateUrl: './search-pdf.component.html',
  styleUrls: ['./search-pdf.component.scss']
})
export class SearchPdfComponent implements OnInit {
  @Output() pdfSearchResultsEmitted = new EventEmitter<Observable<any>>();
  @Input() mode: string;

  pdfSearchForm: FormGroup;
  apiURL: string = environment.apiURL;
  pdfPathPlaceholder: string = "Select PDF file";
  pdfFiles: string[] = [];

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.pdfSearchForm = new FormGroup({
      pdfPath: new FormControl('', Validators.required),
      isPdfIndex: new FormControl('true')
    });
  }

  onFileSelected(event) {
    for (let i = 0; i < event.target.files.length; i++) {
      this.pdfFiles[0] = event.target.files[i];
    }
    this.pdfPathPlaceholder = "PDF document selected";
  }

  emitPdfSearchResults(pdfSearchResults: Observable<any>) {
    const observableData = new Observable<any>((observer) => {
      observer.next(pdfSearchResults);
      observer.complete();
    });
    this.pdfSearchResultsEmitted.emit(observableData);
  }

  searchByPdf() {
    const formData = new FormData();

    for (let i = 0; i < this.pdfFiles.length; i++) {
      formData.append("file", this.pdfFiles[i]);
    }

    let url;

    if(this.mode === "Communities by PDF") {
      url = "/api/communities/search";
    } else {
      url = "/api/posts/search";
    }

    if(this.pdfSearchForm.get("isPdfIndex").value !== null) {
      url += "?isPdfIndex=" + this.pdfSearchForm.get("isPdfIndex").value;
    }

    this.searchService.searchByPdf(url, formData).subscribe(data => {
          this.emitPdfSearchResults(data);
        }, () => {
          alert("Error occurred while retrieving search results!");
        }
    );
  }

  onClear() {
    this.pdfPathPlaceholder = "Select PDF file";
    this.emitPdfSearchResults(null);
  }
}
