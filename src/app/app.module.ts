import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import {HeaderComponent} from './shared/header/header.component';
import {NavHeaderComponent} from './shared/nav-header/nav-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatSidenavModule} from '@angular/material/sidenav';
import {HomeComponent} from './pages/home/home.component';
import {CardComponent} from './shared/card/card.component';
import {MatCardModule} from '@angular/material/card';
import {PaginationComponent} from './shared/pagination/pagination.component';
import {ViewsCountComponent} from './shared/views-count/views-count.component';
import {ArticleComponent} from './pages/article/article.component';
import {UserProfileComponent} from './shared/user-profile/user-profile.component';
import {MatListModule} from '@angular/material/list';
import {ScrollProgressDirective} from './shared/scroll-progress.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavHeaderComponent,
    HomeComponent,
    CardComponent,
    PaginationComponent,
    ViewsCountComponent,
    ArticleComponent,
    UserProfileComponent,
    ScrollProgressDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    ScrollingModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
