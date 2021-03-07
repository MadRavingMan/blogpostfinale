import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentsService } from '../services/comments.service';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.scss'],
})
export class CreateCommentComponent implements OnInit {
  @Input() postId: string;

  postCommentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private commentsService: CommentsService
  ) {}

  ngOnInit(): void {
    this.postCommentForm = this.fb.group({
      content: ['', [Validators.required, Validators.minLength(2)]],
      created: [''],
      id: [''],
      userId: [''],
      postId: [this.postId],
    });
  }

  get content() {
    return this.postCommentForm.get('content');
  }

  setTime() {
    this.postCommentForm.patchValue({ created: Date.now() });
  }

  setCommentId() {
    this.postCommentForm.patchValue({ id: this.getRandomString(24) });
  }

  getRandomString(length) {
    var randomChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(
        Math.floor(Math.random() * randomChars.length)
      );
    }
    return result;
  }

  reset() {
    this.postCommentForm.reset();
  }

  submitComment() {
    this.setTime();
    this.setCommentId();
    // console.log('now', Date.now())
    console.log('commentas', this.postCommentForm.value);
    // this.commentsService.addComment(this.postCommentForm.value).subscribe(() => {
    //   this.reset();
  }
}
