import { Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular';
import CATEGORIES_QUERY from '../../apollo/queries/category/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private apollo: Apollo) { }

  public getCategories(): any{
    return this.apollo
      .watchQuery({
        query: CATEGORIES_QUERY
      });
  }
}
