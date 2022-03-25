import { Component, OnInit } from '@angular/core';

import {JsonPlaceholderService} from "../services/json-placeholder.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserDetails} from "../classes/userDetails";


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {


  id: number
  data: UserDetails;
  userId: number;

  

  constructor(
    private route: ActivatedRoute,
    private jsonPlaceHolderService: JsonPlaceholderService,
    private router: Router,
  ){}



  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.getUser(this.id);


  }

  //getting User details info
  getUser(id: any) {
    this.jsonPlaceHolderService.getUser(id)
      .subscribe(data =>{
        this.data = data
        
      })

  }

  //Getting user posts with button click
  getUserPosts(userId: number) {
    this.router.navigate(['user-posts', userId])

  }
}
