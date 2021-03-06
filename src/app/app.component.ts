import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesService } from './services/categories.service';
import { Category } from './shared/category';
import { MenuItem } from './shared/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'it-academy';

  menuItems: MenuItem[];
  categories$: Observable<Category[]>;

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit() {
    this.menuItems = [
      { path: '/home', title: 'Home' },
      { path: '/about', title: 'About' },
      { path: '/users', title: 'Users' },
      { path: '/authors', title: 'Authors' },
      { path: '/posts/add', title: 'Write a post' },
    ];

    this.categories$ = this.categoriesService.getCategories();
  }
}
