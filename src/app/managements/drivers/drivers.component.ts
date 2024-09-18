import { Component } from '@angular/core';
import { CustomTableComponent } from '../../components/custom-table/custom-table.component';

@Component({
  selector: 'app-drivers',
  standalone: true,
  imports: [CustomTableComponent],
  templateUrl: './drivers.component.html',
  styleUrl: './drivers.component.css',
})
export default class DriversComponent {}
