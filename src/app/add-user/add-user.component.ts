import { Component, OnInit } from '@angular/core';
import { UserService} from "../services/add-user.service";
import { User } from "../model/user";
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user:User = new User ();
  employeeId :string;
  users:User[];

  

  constructor(public userService : UserService, private router: Router) { }

  ngOnInit() {

    this.userService.viewUser().subscribe(
      (data : any) => {        
          this.users = data; //assign the data from subscription to your class variable
      }
    )
    }
addUserDetails(){
  this.userService.addUser(this.user).subscribe(
    (data : any )=> {
      this.user.firstName = data.firstName;
      this.user.lastName = data.lastName;
      this.user.employeeId = data.employeeId;
      this.user.status = data.status;

    }
  )
}

updateUserDetails(usr:User){
  this.userService.updateUser(usr).subscribe(
    (data : any )=> {
      usr.firstName = data.firstName;
      usr.lastName = data.lastName;
      usr.employeeId = data.employeeId;
      usr.status = data.status;

    }
  )
}


searchUserDetails(){
  this.userService.searchUser(this.user.employeeId).subscribe(
  (data : any) => { 
    
      this.users = data; //assign the data from subscription to your class variable
  }
)
}
  sortUserByFirstNm(){
    this.userService.sortUserByFirstNm(this.user).subscribe(
      (data : any) => {
        this.users = data;
  
      }
    )
  }
    sortUserByLastNm(){
      this.userService.sortUserByLastNm().subscribe(
        (data : any) => {
          this.users = data;
    
        }
      )
    }
      sortUserById(){
        this.userService.sortUserById(this.user).subscribe(
          (data : any) => {
            this.users = data;
      
          }
        )
      }

      deleteUser(usr : User){
        this.userService.deleteUser(usr.employeeId).subscribe(
          (data : any) => {
            this.users = data;
            this.users.splice(this.users.indexOf(usr),1);
      
          }
        )
      }
}
