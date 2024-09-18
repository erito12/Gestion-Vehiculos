import { Component } from '@angular/core';
import { CustomTableComponent } from '../../components/custom-table/custom-table.component';

@Component({
  selector: 'app-asignments',
  standalone: true,
  imports: [CustomTableComponent],
  templateUrl: './asignments.component.html',
  styleUrl: './asignments.component.css',
})
export default class AsignmentsComponent {}
