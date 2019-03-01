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

  constructor(public viewTaskService : ViewTaskService) { }

  ngOnInit() {
    this.viewTaskService.viewTask().subscribe(
      (data : any) => {        
          this.tasks = data; 
      }
    )
  }

}
