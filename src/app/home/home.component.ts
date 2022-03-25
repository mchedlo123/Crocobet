import { Component, OnInit } from '@angular/core';
import {JsonPlaceholderService} from '../services/json-placeholder.service'
import {Router} from "@angular/router";
import { UserDetails } from '../classes/userDetails';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: UserDetails[];

  constructor(
    private JSONPlaceholder: JsonPlaceholderService,
    private router: Router,
    ) {
    this.getData();
  }


  ngOnInit(): void {
    
  }

  //Getting Data and logging it in console
  getData() {
    this.JSONPlaceholder.getData()
      .subscribe((data) => {
      this.data = data
    })
  }

  //Getting certain users ID and opening users details
  openUserDetails(id: number): void {
    this.router.navigate(['user-details', id]);
  }
}
