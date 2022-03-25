import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {

  constructor(private http: HttpClient) {}

    //Getting users data from API
    getData(){
      const url = "https://jsonplaceholder.typicode.com/users"

      return this.http.get<any>(url)


    }
    //Getting certain user information from api using ID
    getUser(id: number){
      const url = "https://jsonplaceholder.typicode.com/users/"+id

      return this.http.get<any>(url)
    }

    //getting certain users posts with userId
    getCertainUserPosts(userId: number) {
      const userPost = "https://jsonplaceholder.typicode.com/posts/"+userId

      return this.http.get<any>(userPost)
    }

}
