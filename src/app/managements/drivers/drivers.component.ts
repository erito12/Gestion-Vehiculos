import { Component } from '@angular/core';
import { DiverListComponent } from "../../components/diver-list/diver-list.component";

@Component({
  selector: 'app-drivers',
  standalone: true,
  imports: [ DiverListComponent],
  templateUrl: './drivers.component.html',
  styleUrl: './drivers.component.css',
})
export default class DriversComponent {}
