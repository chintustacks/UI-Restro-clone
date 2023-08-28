import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup } from '@angular/forms';
import { user } from '../model/user.model';
import { UserServices } from '../services/user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userform :any = FormGroup
  user: user =new user()

  constructor(private formBuilder: FormBuilder, private userservice :UserServices) { }

  ngOnInit(): void {
    this.userform = this.formBuilder.group({ 
      ...this.user
    });
    
  }

  Onsubmit(){
    this.user=this.userform.value;
    let resp= this.apidata(this.user)
    console.log(resp);
  }

  apidata(user:user){
    let re= this.userservice.getprofile(this.user)
    console.log("api response " , re); 
  }

  get getControl() {
    return this.userform.controls
  }

}