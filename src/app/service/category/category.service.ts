import { Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular';
import CATEGORIES_QUERY from '../../apollo/queries/category/categories';
import {categories} from './categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private apollo: Apollo) { }

  public getCategories(): any{
    return categories;
  }
}
