// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: any[] = []; // Aquí puedes almacenar los usuarios

  constructor() { }

  register(username: string, email: string, password: string): boolean {
    const user = { username, email, password };
    this.users.push(user); // Guarda el usuario en el array
    localStorage.setItem('users', JSON.stringify(this.users)); // Guarda en localStorage
    return true; // Retorna true si se registró con éxito
  }

  // Método para autenticar
  login(username: string, password: string): boolean {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const user = storedUsers.find((u: any) => u.username === username && u.password === password);
    return !!user; // Retorna true si el usuario existe
  }
}