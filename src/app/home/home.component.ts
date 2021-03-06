import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PostService } from '../services/post.service';
import { Post } from '../shared/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public posts: Observable<Post[]>;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts = this.postService
      .loadPosts()
      .pipe(map((posts) => posts.reverse()));
  }
}
