import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Post } from '../shear/post.model';
@Component({
  selector: 'app-home-post',
  templateUrl: './home-post.component.html',
  styleUrls: ['./home-post.component.css']
})
export class HomePostComponent implements OnInit {
 // user:any = [];
  // posts = new Post();
  baseUrl = 'http://localhost:3000/';
  posts:Post[] = [];
  constructor(private http:HttpClient){
  
  } 
  ngOnInit(): void {
    this.fechpost();
  }

  fechpost(){
    this.http.get(this.baseUrl + "posts").subscribe((res:any) => {
    console.log(res);
    this.posts = res;
  })
  }
  deletepost(id:number){
     this.http.delete(this.baseUrl +"posts/" + id).subscribe((res:any) => {
       console.log(res);
       this.posts = res;
     })
  }
}
