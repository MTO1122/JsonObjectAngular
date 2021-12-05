import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../shear/post.model';
import { ActivatedRoute,Router } from '@angular/router'
@Component({
  selector: 'app-home-update',
  templateUrl: './home-update.component.html',
  styleUrls: ['./home-update.component.css']
})
export class HomeUpdateComponent implements OnInit {
  post: Post = new Post();
  baseUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    //get id on homePost
    this.activatedRoute.params.subscribe(res => {
      this.http.get(this.baseUrl + "posts/" + res['id']).subscribe((res:any) => {
        console.log(res);
        this.post = res;
      });
      // console.log(res);
    });


    

  }

  //update record post
  onsubmit() {
    this.http.put(this.baseUrl +`posts/${this.post.id}` ,this.post).subscribe((res:any) => {
      console.log(res);
      this.router.navigateByUrl("/home");
    });
  }

}
