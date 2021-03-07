import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CommentsService } from '../services/comments.service';
import { PostService } from '../services/post.service';
import { Post } from '../shared/post';
import { Comment } from '../shared/comment';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit {
  postId$: Observable<string>;
  post$: Observable<Post>;
  post: Post;
  comments$: Observable<Comment[]>;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private commentsService: CommentsService
  ) {}

  ngOnInit(): void {
    // this.post$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) => {
    //     const id = params.get('id');
    //     return this.postService.getPost(id);
    //   })
    // );

    this.postId$ = this.route.paramMap.pipe(
      map((paramMap) => {
        return paramMap.get('id');
      })
    );

    this.post$ = this.postId$.pipe(
      switchMap((id) => {
        return this.postService.getPost(id);
      })
    );

    this.comments$ = this.postId$.pipe(
      switchMap((id) => {
        return this.commentsService
          .getCommentsByPostId(id)
          .pipe(
            map((value) =>
              value.sort((a, b) => (a.created > b.created ? -1 : 1))
            )
          );
      })
    );
  }

  addLike(post: Post): void {
    this.postService.addLike(post).subscribe();
  }

  removeLike(post: Post): void {
    this.postService.removeLike(post).subscribe();
  }
}
