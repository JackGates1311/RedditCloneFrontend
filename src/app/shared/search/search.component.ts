import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  selectedForm: string = 'Communities';
  searchResults: any[] = [];
  headerFields: string[] = [];
  headerFieldsForTable: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  handleSearchResultsData(observableData: Observable<any>) {
    observableData.subscribe((results) => {
      this.searchResults = results;

      if(this.selectedForm === "Communities") {
        this.headerFields = ["id", "name", "description", "postCount", "averageKarma", "highlighterText"];
        this.headerFieldsForTable = ["ID", "Name", "Description", "Posts count", "Average karma", "Highlighter text"];
      } else {
        this.headerFields = ["id", "title", "text", "commentCount", "karma", "flairs", "highlighterText"];
        this.headerFieldsForTable = ["ID", "Title", "Text", "Comments count", "Karma", "Flairs", "Highlighter text"];
      }
    });
  }

  highlightText(text: string) {
    if(text !== null && text !== "") {
      return text.replace(/<em>(.*?)<\/em>/g, '<span class="highlight">$1</span>');
    } else {
      return "";
    }
  }
}
