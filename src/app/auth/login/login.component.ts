import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ RouterLink                                                                                                                                                                                                                                                                                                          ],
  templateUrl: './login.component.html',
})

export default class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  onSubmit() {
    // Call your authentication service to validate the user
    const isAuthenticated = this.authService.login(this.username, this.password); // Implement this method in AuthService

    if (isAuthenticated) {
      this.router.navigate(['/layout']); // Redirect to layout on successful login
    } else {
      // Handle login failure (e.g., show an error message)
      this.router.navigate(['/layout']); 
    }
  }
}
