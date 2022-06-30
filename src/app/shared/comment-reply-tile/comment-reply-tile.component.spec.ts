import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentReplyTileComponent } from './comment-reply-tile.component';

describe('CommentReplyTileComponent', () => {
  let component: CommentReplyTileComponent;
  let fixture: ComponentFixture<CommentReplyTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentReplyTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentReplyTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
