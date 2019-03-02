import { Injectable } from '@angular/core';
import { Task } from "../model/task";
import  { HttpClient } from '@angular/common/http';
import { AppComponent } from "../app.Component";

import { Observable, Subject, pipe } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class ViewTaskService{

constructor(private http : HttpClient){}

sortTaskByStartDt(){
    return this.http.get("http://localhost:8080/iiht/sortTasksByStartDt").map(resp  => resp);
}

sortTaskByEndDt(){
    return this.http.get("http://localhost:8080/iiht/sortTasksByEndDt").map(resp  => resp);
}

sortTasksByPriority(){
    return this.http.get("http://localhost:8080/iiht/sortTasksByPriority").map(resp  => resp);
}

sortTasksByStatus(){
    return this.http.get("http://localhost:8080/iiht/sortTasksByStatus").map(resp  => resp);
}

viewTask(){
    return this.http.get("http://localhost:8080/iiht/viewTask").map(resp  => resp);
}

endTask(task){
    return this.http.post("http://localhost:8080/iiht/endTask",task).map(resp  => resp);
}


}