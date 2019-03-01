import { Component, OnInit } from '@angular/core';
import { ProjectService} from "../services/add-project.service";
import { Project } from "../model/project";
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
project:Project = new Project();
projects:Project[];
  constructor(public projectService : ProjectService, private router: Router) { }

  ngOnInit() {
    this.projectService.viewProject().subscribe(
      (data : any) => {        
          this.projects = data; //assign the data from subscription to your class variable
      }
    )
  }

  addProjectDetails(){
    this.projectService.addProject(this.project).subscribe(
      (data : any )=> {
        this.project.projectNm = data.projectNm;
        this.project.startDt = data.startDt;
        this.project.endDt = data.endDt;
        this.project.priority = data.priority;
        this.project.status = data.status;
  
      }
    )
  }

  sortProjectByStartDt(){
    this.projectService.sortProjectByStartDt().subscribe(
      (data : any) => {        
          this.projects = data; //assign the data from subscription to your class variable
      }
    )
  }
  sortProjectByEndDt(){
      this.projectService.sortProjectByEndDt().subscribe(
        (data : any) => {        
            this.projects = data; //assign the data from subscription to your class variable
        }
      )
    }

    sortProjectByPriority(){
      this.projectService.sortProjectByPriority().subscribe(
        (data : any) => {        
            this.projects = data; //assign the data from subscription to your class variable
        }
      )
    }

}
