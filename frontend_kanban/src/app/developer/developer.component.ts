import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { KanbanService } from '../_service/kanban.service';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent {

  id: any;
  developer: any;

  constructor(private _Activatedroute:ActivatedRoute,
    private _router: Router,
    private kanbanService: KanbanService
    ) { 
  }

  ngOnInit(): void {
    this._Activatedroute.params.subscribe((params: { [x: string]: any; }) => { 
      this.id = params['id']; 
    });
    this.kanbanService.getDevelopers().subscribe((data: any[]) => {
      this.developer = data.find((u: { id: any; }) => u.id == this.id);
      console.log(this.id);
    });
}

}
