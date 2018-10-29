import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesListComponent } from '../courses-list/courses-list.component';

@NgModule({
  imports: [
    CommonModule,
    CoursesRoutingModule
  ],
  declarations: [CoursesListComponent],
  exports: [CoursesListComponent],
})
export class CoursesModule { }
