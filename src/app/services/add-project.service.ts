import { Injectable } from '@angular/core';
import { Project } from "../model/project";
import  { HttpClient } from '@angular/common/http';
import { AppComponent } from "../app.Component";

import { Observable, Subject, pipe } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class ProjectService{

private useUrl : string ='iiht/addUser';
constructor(private http : HttpClient){}

addProject(project:Project){
    return this.http.post("http://localhost:8080/iiht/addProject",
        project).map(resp  => resp);
}

viewProject(){
    return this.http.get("http://localhost:8080/iiht/viewProject").map(resp  => resp);
}

sortProjectByStartDt(){
    return this.http.get("http://localhost:8080/iiht/sortProjectByStartDt").map(resp  => resp);
}

sortProjectByEndDt(){
    return this.http.get("http://localhost:8080/iiht/sortProjectByEndDt").map(resp  => resp);
}
sortProjectByPriority(){
    return this.http.get("http://localhost:8080/iiht/sortProjectByPriority").map(resp  => resp);
}

}