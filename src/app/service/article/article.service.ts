import { Injectable } from '@angular/core';
import {articles} from './articles';

export interface Article {
  category: { name: string };
  id: number;
  image: string;
  title: string;
  viewCount: number;
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  public getArticles(): Article[]{
    return articles;
  }
}
