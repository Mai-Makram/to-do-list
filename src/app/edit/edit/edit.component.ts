import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PostsService } from 'src/app/servies/posts.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

constructor(private postService:PostsService, private route:ActivatedRoute, private toaster:ToastrService,private router:Router){}

  id:string = this.route.snapshot.params['id']
  post:any={}
  image!:File
  formData:any
  getSinglePost(){
    this.postService.getSinglePost(this.id).subscribe({
      next:(res:any)=>{
      this.post=res
      console.log(this.post)
      },error:(err:any)=>{
        console.log(err)
      }
    })
   }
    
   uploadFile(event:any){
    this.image = event.target.files[0]
   }

   editPost(posts:any){
    console.log(posts)
    const formdata = new FormData();
    formdata.append('id', posts.id);
    formdata.append('content', posts.content);
    formdata.append('title', posts.title);
    formdata.append('image', this.image);
    
    if(posts.image == ""){
      this.formData = posts
    }else{
      this.formData = formdata
    }
    
    this.postService.editPost(this.formData).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.toaster.success("task has been updated","",{
          disableTimeOut:false,
          titleClass:"toastr_title",
          messageClass:"toastr_message",
          timeOut:5000,
          closeButton:true
        })
        this.router.navigateByUrl('/home/homepage')
      },error:(err:any)=>{
        console.log(err)
      }
    })
   }

  ngOnInit(): void {
    this.getSinglePost()
  }
}
