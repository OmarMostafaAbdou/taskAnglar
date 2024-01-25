import { Component } from '@angular/core';
import { Ilogin } from '../../datatypes/usertype';
import { Router } from '@angular/router';
import { ApiserviceService } from '../../datatypes/sevices/apiservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  user: Ilogin;

  constructor(private router: Router, private loginserve: ApiserviceService) {
    this.user = { email: '', password: '' };
  }
  fire() {
    this.loginserve.Login(this.user).subscribe({
      next: (response) => {
        console.log(response.success);
        if (response.success) {
          alert(response.message);
          console.log(response.data);
          localStorage.setItem('data', JSON.stringify(response.data));
          this.router.navigateByUrl('/home');
        }
      },
    });
  }
}
