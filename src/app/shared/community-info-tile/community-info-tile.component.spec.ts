import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityInfoTileComponent } from './community-info-tile.component';

describe('CommunityInfoTileComponent', () => {
  let component: CommunityInfoTileComponent;
  let fixture: ComponentFixture<CommunityInfoTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityInfoTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityInfoTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
