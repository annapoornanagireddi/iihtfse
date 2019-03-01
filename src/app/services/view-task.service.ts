import { Injectable } from '@angular/core';
import { Task } from "../model/task";
import  { HttpClient } from '@angular/common/http';
import { AppComponent } from "../app.Component";

import { Observable, Subject, pipe } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class ViewTaskService{

constructor(private http : HttpClient){}

viewTask(){
    return this.http.get("http://localhost:8080/iiht/viewTask").map(resp  => resp);
}


}