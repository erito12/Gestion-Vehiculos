// register.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [FormsModule]
  
  
})
export default class RegisterComponent {
  fullname: string = '';
  email: string = '';
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    const success = this.authService.register(this.username, this.email, this.password);
    if (success) {
      this.router.navigate(['/home']); // Navega al componente Home
    }
  }
}