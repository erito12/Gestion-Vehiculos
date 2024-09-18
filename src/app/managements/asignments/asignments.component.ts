import { Component } from '@angular/core';
import { DiverListComponent } from '../../components/diver-list/diver-list.component';

@Component({
  selector: 'app-asignments',
  standalone: true,
  imports: [DiverListComponent],
  templateUrl: './asignments.component.html',
  styleUrl: './asignments.component.css',
})
export default class AsignmentsComponent {}
