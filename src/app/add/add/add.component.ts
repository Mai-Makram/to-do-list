import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PostsService } from 'src/app/servies/posts.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

 
image!:File
constructor( private postService:PostsService ,private toaster:ToastrService, private router:Router ){}

uploadFile(event:any){
 this.image = event.target.files[0]
  }

  addPost(post:any){
    const formdata = new FormData();
    formdata.append('content', post.content);
    formdata.append('title', post.title);
    formdata.append('username',post.username);
    formdata.append('image', this.image);
   
    this.postService.addPosts(formdata).subscribe({
      next:(res:any)=>{
        console.log(res)
        localStorage.setItem("username", JSON.stringify(post.username))
        this.toaster.success("new task has been added","",{
          disableTimeOut:false,
          titleClass:"toastr_title",
          messageClass:"toastr_message",
          timeOut:5000,
          closeButton:true
        })
        this.router.navigateByUrl("/home/homepage")
      }, error:(err:any)=>{
        console.log(err)
      }
    })
  }

}
