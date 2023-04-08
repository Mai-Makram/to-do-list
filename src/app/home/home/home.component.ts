import { Component } from '@angular/core';
import { PostsService } from 'src/app/servies/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  posts:any[]=[]
 // imageees:any[]=[]

  constructor(private postService:PostsService){}


  getByUsername(event:any){
    let username = event.target.value
    localStorage.setItem("username", JSON.stringify(username))
    this.getAllPosts()
  }

  getAllPosts(){
    let username = JSON.parse(localStorage.getItem("username")!)
    this.postService.getAllPosts(username).subscribe({
      next:(res:any)=>{
        console.log(res)
        for(let i = 0; res.length>0;i++){
          let image = res[i].image.slice(7)
          const post ={
              id : res[i].id,
              content:res[i].content,
              title:res[i].title,
              username:res[i].username,
              image:image
          }
          this.posts.push(post)
        }
      },error:(err:any)=>{
        console.log(err)
      }
    })
  }

  deletePost(id:any,i:number){
    this.postService.deletePost(id).subscribe({
      next:()=>{
        this.posts.splice(i,1)
      },error:(err:any)=>{
        console.log(err)
      }
    })
  }

  ngOnInit(): void {
    this.getAllPosts()
  }

}
