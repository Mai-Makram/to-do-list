import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/servies/posts.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
 constructor( private postService:PostsService, private route:ActivatedRoute){}
 id:string = this.route.snapshot.params['id']
 post:any={}

 getSinglePost(){
  this.postService.getSinglePost(this.id).subscribe({
    next:(res:any)=>{
      console.log(res)
      const post ={
        id : res.id,
        content:res.content,
        title:res.title,
        username:res.username,
        image:res.image.slice(7)
    }
    this.post=post
    },error:(err:any)=>{
      console.log(err)
    }
  })
 }
 ngOnInit(): void {
  this.getSinglePost()
}
}
