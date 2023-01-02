import { Component, Input, OnInit } from '@angular/core';
import * as mat from '@angular/material';
import { map } from 'rxjs/operators';
import { KanbanService } from '../_service/kanban.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  taskTypes: {
    id: number;
    label: string;
  }[] = [];
  tasks: {
    id: number;
    title: string;
    nbHoursForecast: number;
    nbHoursReal: number;
    created: Date;
    type: {
      id: number;
      label: string;
    };
    status: {
      id: number;
      label: string;
    };
    developers: any;
    changeLogs: any;
  }[] = [];
  columns: {
    title: string;
    cards: any;
  }[] = [];

  constructor(private kanbanService: KanbanService) {
  }

  ngOnInit(): void {
    this.kanbanService.getTaskTypes()
    .pipe(map((response: any) => response))
    .subscribe((data: any) => {
      this.taskTypes = data;
    });
    this.kanbanService.getTasks()
    .pipe(map((response: any) => response))
    .subscribe((data: any) => {
      this.tasks = data;
      this.fillColumns();
    });
  };
  
  public fillColumns()  {
    this.taskTypes.forEach( (type) => {
      this.columns.push({title: type.label, 
        cards: this.tasks.filter(((task: { type: any; }) => task.type.label === type.label))});
    })
  }


}
