import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Article, ArticleService} from '../../service/article/article.service';
import {map} from 'rxjs/operators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articles: Article[];
  loading: boolean;
  private queryArticles: Subscription;

  constructor(private router: Router, private articleService: ArticleService) { }

  ngOnInit(): void {
    this.queryArticles = this.articleService.getArticles()
      .valueChanges.subscribe(result => {
        this.articles = result.data.articles;
        this.loading = result.loading;
        console.log(this.articles)
      });
  }

  public navigateTo(): void {
    this.router.navigate(['article']);
  }
}
