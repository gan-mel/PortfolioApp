import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavComponent } from './app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule } from '@angular/material';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ParallaxModule, ParallaxConfig } from 'ngx-parallax';
import { MzParallaxModule, MzCardModule, MzInputModule, MzDatepickerModule   } from 'ngx-materialize';
import { PostsComponent } from './posts/posts.component';


import {PostsService} from './posts.service';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule } from '@angular/http';
import { NewPostComponent } from './new-post/new-post.component';

import {FormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    MainpageComponent,
    PostsComponent,
    NewPostComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ParallaxModule,
    MzParallaxModule,
    MzCardModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    MzInputModule,
    MzDatepickerModule,
    MatCardModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
