import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true, // Asegúrate de que esto esté presente
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private router: Router) {}

  // Método para manejar el envío del formulario
  onSubmit(event: Event) {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario
    // Aquí deberías agregar la lógica para autenticar al usuario
    // Si la autenticación es exitosa, redirige a la página principal
    // this.router.navigate(['/dashboard']); // Descomenta esto cuando implementes la autenticación
  }

  goToRegister() {
    this.router.navigate(['/register']);
  } 
}
