import { Component, OnInit } from '@angular/core';
import { ViewTaskService} from "../services/view-task.service";
import { Task } from "../model/task";

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {
  tasks:Task[];
  endTaskStatus:string="complete";

  constructor(public viewTaskService : ViewTaskService) { }

  ngOnInit() {
    this.viewTaskService.viewTask().subscribe(
      (data : any) => {        
          this.tasks = data; 
      }
    )
  }

  endTask(task:Task){
    this.viewTaskService.endTask(task).subscribe(
      (data : any) => {        
          task = data;
         
      }
    )
  }

  sortTasksByStartDt(){
    this.viewTaskService.sortTaskByStartDt().subscribe(
      (data : any) => {        
          this.tasks = data; 
      }
    )
  }

  sortTasksByEndDt(){
    this.viewTaskService.sortTaskByEndDt().subscribe(
      (data : any) => {        
          this.tasks = data; 
      }
    )
  }

  sortTasksByPriority(){
    this.viewTaskService.sortTasksByPriority().subscribe(
      (data : any) => {        
          this.tasks = data; 
      }
    )
  }

  sortTasksByStatus(){
    this.viewTaskService.sortTasksByStatus().subscribe(
      (data : any) => {        
          this.tasks = data; 
      }
    )
  }

}
