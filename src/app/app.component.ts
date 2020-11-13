import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {NavigationEnd, Router} from '@angular/router';
import {Article, ArticleService} from './service/article/article.service';
import {CategoryService} from './service/category/category.service';
export interface Categories {
  categories: any[];
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy{
  categories: any[];
  articles: Article[];
  loading = true;
  isArticlePage: boolean;



  private queryCategories: Subscription;
  private queryArticles: Subscription;


  constructor(private articleService: ArticleService, private router: Router, private categoryService: CategoryService) {
    this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          this.router.url === '/article' ? this.isArticlePage = true : this.isArticlePage = false;
        }
      }
    );
  }

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories()
      .valueChanges.subscribe((result) => {
        this.categories = result.data.categories;
        this.loading = result.loading;
        console.log(this.categories)
      });
  }

  public navigateHome(): void {
    this.router.navigate(['/home']);
  }

  ngOnDestroy(): void {
    this.queryCategories.unsubscribe();
  }}
