import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityFlairsTileComponent } from './community-flairs-tile.component';

describe('CommunityFlairsTileComponent', () => {
  let component: CommunityFlairsTileComponent;
  let fixture: ComponentFixture<CommunityFlairsTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityFlairsTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityFlairsTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
