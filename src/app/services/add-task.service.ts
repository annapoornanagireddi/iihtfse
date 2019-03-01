import { Injectable } from '@angular/core';
import { Task } from "../model/task";
import  { HttpClient } from '@angular/common/http';
import { AppComponent } from "../app.Component";

import { Observable, Subject, pipe } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class TaskService{

constructor(private http : HttpClient){}

addTask(task:Task){
    return this.http.post("http://localhost:8080/iiht/addTask",
        task).map(resp  => resp);
}

}