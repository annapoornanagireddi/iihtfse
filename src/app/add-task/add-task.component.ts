import { Component, OnInit } from '@angular/core';
import { TaskService} from "../services/add-task.service";
import { Task } from "../model/task";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  task:Task= new Task();

  constructor(public taskService : TaskService) { }

  ngOnInit() {
  }
  addTaskDetails(){
    this.taskService.addTask(this.task).subscribe(
      (data : any )=> {
        this.task.projectId = data.projectId;
        this.task.parentTaskId = data.parentTaskId;
        this.task.taskNm = data.taskNm;
        this.task.startDt = data.startDt;
        this.task.endDt = data.endDt;
        this.task.priority = data.priority;
        this.task.status = data.status;
        this.task.saveStatus = data.saveStatus;
      }
    )
  }
}
