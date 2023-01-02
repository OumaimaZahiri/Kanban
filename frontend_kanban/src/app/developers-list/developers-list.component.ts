import { Component } from '@angular/core';
import { KanbanService } from '../_service/kanban.service';
import { map  } from 'rxjs/operators';

@Component({
  selector: 'app-developers-list',
  templateUrl: './developers-list.component.html',
  styleUrls: ['./developers-list.component.css']
})
export class DevelopersListComponent {
  developersList: any;

  constructor(private kanbanService: KanbanService) {
    }

    ngOnInit(): void {
      this.kanbanService.getDevelopers()
      .pipe(map((response: any) => response))
      .subscribe((data: any) => {
        console.log(data);
        this.developersList = data;
      });
    }
}
