import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core'; // Asegúrate de importar Input
import { FormsModule } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  tipo: string; // Añadido para el filtro
}

@Component({
  selector: 'app-diver-list',
  standalone: true,
  imports: [MatTableModule, CommonModule, FormsModule],
  templateUrl: './diver-list.component.html',
  styleUrls: ['./diver-list.component.css'], // Corrige 'styleUrl' a 'styleUrls'
})
export class DiverListComponent {
  @Input() data: PeriodicElement[] = []; // Recibe datos desde el componente padre
  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'delete',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(this.data);
  filterBy = ''; // Inicialmente, no hay filtro

  applyFilter() {
    this.dataSource.filter = this.filterBy.trim().toLowerCase(); // Aplicar el filtro
  }

  deleteConductor(position: number) {
    this.data = this.data.filter((element) => element.position !== position);
    this.dataSource.data = this.data; // Actualiza la fuente de datos de la tabla
  }
}
