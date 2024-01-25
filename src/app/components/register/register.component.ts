import { Component } from '@angular/core';
import { ApiserviceService } from '../../datatypes/sevices/apiservice.service';
import { Router } from '@angular/router';
import { IRegister } from '../../datatypes/usertype';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  user: IRegister;
  constructor(private AuthKey: ApiserviceService, private router: Router) {
    this.user = {
      name: '',
      phoneNumber: '',
      password: '',
      email: '',
    };
  }

  signup() {
    this.AuthKey.Register(this.user).subscribe({
      next: (response) => {
        if (response.success == true) {
          alert(response.message);
          this.router.navigateByUrl('/login');
        } else {
          alert(response.data.message);
        }
      },
    });
  }
}
