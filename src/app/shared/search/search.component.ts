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

  handleCommunitySearchResultsData(observableData: Observable<any>) {
    observableData.subscribe((results) => {
      console.log('Data received from component:', results);
      this.searchResults = results;

      if(this.selectedForm === "Communities") {
        this.headerFields = ["id", "name", "description", "postCount", "averageKarma", "highlighterText"];
        this.headerFieldsForTable = ["ID", "Name", "Description", "Post count", "Average Karma", "Highlighter Text"];
      } else {
        // for posts
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
