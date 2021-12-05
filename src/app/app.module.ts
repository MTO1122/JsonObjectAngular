import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HomePostComponent } from './home-post/home-post.component';
import { CreatePostComponent } from './create-post/create-post.component';
import {FormsModule} from '@angular/forms';
import { HomeUpdateComponent } from './home-update/home-update.component'
@NgModule({
  declarations: [
    AppComponent,
    HomePostComponent,
    CreatePostComponent,
    HomeUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
