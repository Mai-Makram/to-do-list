import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

url="https://task.ecmpp.com/api/task/"

  constructor( private http:HttpClient ) { }

  getAllPosts(username:string){
    return this.http.get(this.url + 'all/'+ username)
  }

  addPosts(post:any){
    return this.http.post(this.url + 'add' , post)
  }

  deletePost(id:any){
    return this.http.delete(this.url + 'remove/'+ id)
  }

  getSinglePost(id:any){
    return this.http.get(this.url + 'Show/'+ id )
  }

  editPost(post:any){
    return this.http.post(this.url + 'edit' , post)
  }
}
