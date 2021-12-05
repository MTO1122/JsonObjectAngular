import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from '../shear/post.model';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  post:Post = new Post();
  baseUrl = 'http://localhost:3000/';
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    
  }
  onsubmit(){
    console.log(this.post);
    this.http.post(this.baseUrl + 'posts',this.post).subscribe(res => {
      console.log(res);
    })
  }

}
