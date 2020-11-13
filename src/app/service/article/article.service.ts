import { Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular';
import ARTICLES_QUERY from '../../apollo/queries/category/article';

export interface Article {
  category: any;
  id: number;
  image: any;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private apollo: Apollo) { }

  public getArticles(): any{
    return this.apollo
      .watchQuery<Article[]>({
        query: ARTICLES_QUERY
      });
  }
}
