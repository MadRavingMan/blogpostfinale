import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Comment } from '../shared/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private httpClient: HttpClient) {}

  getComments(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>('/api/comments');
  }

  getCommentsByPostId(postId: string): Observable<Comment[]> {
    return this.getComments().pipe(
      map((comment) => comment.filter((item) => item.postId === postId))
    );
  }

  addComment(comment: Comment): Observable<Comment> {
    return this.httpClient.post<Comment>('/api/posts', comment);
  }
}
