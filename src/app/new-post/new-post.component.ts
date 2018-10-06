import { Component, Output, EventEmitter } from '@angular/core';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent  {

  @Output() onPosted = new EventEmitter();

  newMsg = {
    author: '',
    text : ''
  };

  result;


 constructor(private postsService : PostsService) { 

 }



 posting(): void {
  this.postsService.postMessages(this.newMsg)
      .subscribe(message => this.result = message);
      this.onPosted.emit(this.newMsg);

}



//  ngOnInit() {
//    this.posting()
//  }

}