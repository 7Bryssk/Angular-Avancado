import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  variavel = '';

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    //this.variavel = activatedRoute.snapshot.params.variavel;

    this.activatedRoute.params.subscribe(
      params => {
        this.variavel = params['variavel']
      }
    );
  }

  ngOnInit() {
  }

}
