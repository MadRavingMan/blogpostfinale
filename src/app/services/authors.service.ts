import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from '../shared/author';
import { Post } from '../shared/post';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  constructor(private httpClient: HttpClient) {}

  getAuthors(): Observable<Author[]> {
    return this.httpClient.get<Author[]>('/api/authors');
  }

  getAuthor(id: string): Observable<Author> {
    return this.httpClient.get<Author>(`/api/authors/${id}`);
  }

  getAuthorPosts(id: string): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`/api/authors/${id}/posts`);
  }
}
