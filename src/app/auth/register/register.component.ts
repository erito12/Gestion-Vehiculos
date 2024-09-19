// register.component.ts
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [FormsModule, RouterLink]
  
  
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
      this.router.navigate(['/layout']); // Navega al componente Home
    }
  }
}