import { Component } from "@angular/core";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostlistComponent{
  // posts = [
  //   {title: "first post", content: "thisdis the post conte"},
  //   {title: "Second post", content: "tdhisis the post conte"},
  //   {title: "third post", content: "thisis thdde post conte"}
  // ]
  posts = [];
}
