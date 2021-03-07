import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { HomeComponent } from './home/home.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostComponent } from './post/post.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { PostListComponent } from './post-list/post-list.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AuthorPageComponent } from './author-page/author-page.component';
import { AuthorsPageComponent } from './authors-page/authors-page.component';
import { MostViewedPostsComponent } from './most-viewed-posts/most-viewed-posts.component';
import { CommentDetailsComponent } from './comment-details/comment-details.component';
import { CreateCommentComponent } from './create-comment/create-comment.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    PostDetailsComponent,
    RecentPostsComponent,
    CreatePostComponent,
    NavbarComponent,
    CategoryPageComponent,
    PostListComponent,
    AuthorDetailsComponent,
    AuthorPageComponent,
    AuthorsPageComponent,
    MostViewedPostsComponent,
    CommentDetailsComponent,
    CreateCommentComponent,
    UsersPageComponent,
    UserPageComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
