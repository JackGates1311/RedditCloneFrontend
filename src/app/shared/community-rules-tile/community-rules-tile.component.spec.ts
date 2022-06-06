import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityRulesTileComponent } from './community-rules-tile.component';

describe('CommunityRulesTileComponent', () => {
  let component: CommunityRulesTileComponent;
  let fixture: ComponentFixture<CommunityRulesTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityRulesTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityRulesTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
