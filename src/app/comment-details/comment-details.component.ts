import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../shared/comment';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.scss'],
})
export class CommentDetailsComponent implements OnInit {
  @Input() comment: Comment;

  constructor() {}

  ngOnInit(): void {}
}
