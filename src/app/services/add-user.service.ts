import { Injectable } from '@angular/core';
import { User } from "../model/user";
import  { HttpClient } from '@angular/common/http';
import { AppComponent } from "../app.Component";

import { Observable, Subject, pipe } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService{

private useUrl : string ='iiht/addUser';
constructor(private http : HttpClient){}

addUser(user:User){
    return this.http.post("http://localhost:8080/iiht/addUser",
        user).map(resp  => resp);
}

updateUser(usr:User){
    return this.http.post("http://localhost:8080/iiht/updateUser",
        usr).map(resp  => resp);
}

viewUser(){
    return this.http.get("http://localhost:8080/iiht/viewUser").map(resp  => resp);
}


searchUser(employeeId:string){
    return this.http.get("http://localhost:8080/iiht/searchUser?employeeId="+employeeId).map(resp  => resp);
}

sortUserByFirstNm(user:User){
    return this.http.get("http://localhost:8080/iiht/sortUserByFirstNm").map(resp  => resp);
}

sortUserByLastNm(){
    return this.http.get("http://localhost:8080/iiht/sortUserByLastNm").map(resp  => resp);
}

sortUserById(user:User){
    return this.http.get("http://localhost:8080/iiht/sortUser").map(resp  => resp);
}

deleteUser(employeeId:string){
    return this.http.get("http://localhost:8080/iiht/deleteUser?employeeId="+employeeId).map(resp  => resp);
}
} 