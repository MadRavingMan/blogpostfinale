import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from '../services/post.service';
import { Post } from '../shared/post';

@Component({
  selector: 'app-most-viewed-posts',
  templateUrl: './most-viewed-posts.component.html',
  styleUrls: ['./most-viewed-posts.component.scss'],
})
export class MostViewedPostsComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(private postService: PostService) {}

  ngOnInit(): void {

    this.posts$ = this.postService.getMostViewedPosts(5);
  }
}
