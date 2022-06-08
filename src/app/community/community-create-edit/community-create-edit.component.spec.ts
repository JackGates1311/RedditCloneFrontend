import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityCreateEditComponent } from './community-create-edit.component';

describe('CommunityCreateEditComponent', () => {
  let component: CommunityCreateEditComponent;
  let fixture: ComponentFixture<CommunityCreateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityCreateEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
