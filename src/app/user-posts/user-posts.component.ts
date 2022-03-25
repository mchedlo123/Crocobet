import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from "../services/json-placeholder.service";
import {ActivatedRoute} from "@angular/router";
import {PostsDetails} from "../classes/postsDetails";


@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {

  userId:  any;
  data: PostsDetails;
  



  constructor(
    private route: ActivatedRoute,
    private jsonPlaceholderService: JsonPlaceholderService
    
    )
  {}




  ngOnInit(): void {

    this.userId = this.route.snapshot.params['userId']
    this.getCertainUserPosts(this.userId)

  }


  //getting certain user post with id
  getCertainUserPosts(userId: any){
    this.jsonPlaceholderService.getCertainUserPosts(userId)
      .subscribe(data => {
        this.data = data
      })
  }
}
