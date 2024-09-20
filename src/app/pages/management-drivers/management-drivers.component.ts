import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../components/modal/modal.component';
import { MatIconModule } from '@angular/material/icon';
import { DiverListComponent } from '../../components/diver-list/diver-list.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  tipo: string; // Añadido para el filtro
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    tipo: 'conductor',
  },
  {
    position: 2,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
    tipo: 'vehiculo',
  },
  // Agrega más elementos según sea necesario
];
@Component({
  selector: 'app-management-drivers',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ModalComponent,
    MatIconModule,
    DiverListComponent,
  ],
  templateUrl: './management-drivers.component.html',
  styleUrl: './management-drivers.component.css',
})
export default class ManagementDriversComponent {
  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  data = ELEMENT_DATA; // Datos que se pasarán al componente de tabla
  showTable = false; // Controla la visibilidad de la tabla

  toggleTable() {
    this.showTable = !this.showTable;
  }
  
}
