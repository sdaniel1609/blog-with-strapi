import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Apollo} from 'apollo-angular';
import CATEGORIES_QUERY from './apollo/queries/category/categories';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  data: any = {};
  loading = true;
  errors: any;
  private queryCategories: Subscription;
  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.queryCategories = this.apollo
      .watchQuery({
        query: CATEGORIES_QUERY
      })
      .valueChanges.subscribe(result => {
        this.data = result.data;
        this.loading = result.loading;
        this.errors = result.errors;
      });
  }

  ngOnDestroy(): void {
    this.queryCategories.unsubscribe();
  }}
