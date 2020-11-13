import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Article, ArticleService} from '../../service/article/article.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articles: Article[];
  loading: boolean;

  constructor(private router: Router, private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articles = this.articleService.getArticles();
  }

  public navigateTo(): void {
    this.router.navigate(['article']);
  }
}
