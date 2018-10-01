import { Component, OnInit, ViewChild } from '@angular/core';
import {PostsService} from '../posts.service';
import {NewPostComponent} from '../new-post/new-post.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @ViewChild(NewPostComponent) messaging : NewPostComponent;

   messages;

  constructor(
    private postsService : PostsService) { 

  }

  // messages =  [{text:"Hello my name is Test", owner:"Tester testy"},{text:"Hello my name is John",owner:"John Smith"}]

  getMessages(): void {
    this.postsService.getMessages()
        .subscribe(message => this.messages = message);
  }

  onPosted(message){
    this.messages.push(message);
  }

  ngOnInit() {
    this.getMessages();
  }

}
