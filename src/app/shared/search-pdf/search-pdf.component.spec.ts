import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPdfComponent } from './search-pdf.component';

describe('SearchPdfComponent', () => {
  let component: SearchPdfComponent;
  let fixture: ComponentFixture<SearchPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
