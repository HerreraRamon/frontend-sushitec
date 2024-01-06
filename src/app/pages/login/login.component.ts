import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiProvider } from '../../providers/api.prov'
import { NavComponent } from '../../shared/nav/nav.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NavComponent, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = ''; 
  password: string = ''; 
  constructor(
    private apiProv: ApiProvider
  ) {
    /*if(apiProv.isAuthenticatedUser()){
      window.location.href = '/dashboard'
    }*/
  }

  public login(){
    const data = {
      email: this.email,
      password: this.password
    }

    this.apiProv.login(data).then(res => {
      console.log(res);
      if(res.token){
        localStorage.setItem("token", res.token);
        window.location.href = '/menu';
      }
    });
  }

}
