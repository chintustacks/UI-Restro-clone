import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from '../serviec/home-service.service';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home-landing',
  templateUrl: './home-landing.component.html',
  styleUrls: ['./home-landing.component.css']
})
export class HomeLandingComponent implements OnInit {
  data: any
  //data member
  searchText: string = ''

  //Subject for api call loader
  isLoading: Subject<boolean> = this.homeservice.isLoading;


  constructor(
    private homeservice: HomeServiceService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getuserlist();

  }

  async getuserlist() {
    await this.homeservice.getUserList()
      .then((resp) => {
        this.data = resp
        console.log(this.data);
      })
      .catch((err) => {
        console.log(err);

      });
  }

  onsubmit() {
    console.log("submit called")
    this.toastr.success('Order Placed Sucessfully');
  }
}
