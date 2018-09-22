import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavComponent } from './app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ParallaxModule, ParallaxConfig } from 'ngx-parallax';
import { TestComponent } from './test/test.component';

import { MzParallaxModule, MzCardModule } from 'ngx-materialize';


@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    MainpageComponent,
    TestComponent
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
    MzCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
