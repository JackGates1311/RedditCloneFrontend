import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentCreateEditComponent } from './comment-create-edit.component';

describe('CommentCreateEditComponent', () => {
  let component: CommentCreateEditComponent;
  let fixture: ComponentFixture<CommentCreateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentCreateEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
