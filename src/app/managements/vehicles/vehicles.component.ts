import { Component } from '@angular/core';
import { CustomTableComponent } from '../../components/custom-table/custom-table.component';

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [CustomTableComponent],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.css',
})
export default class VehiclesComponent {}
