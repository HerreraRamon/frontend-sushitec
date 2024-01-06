import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from '../../shared/nav/nav.component';
import { ApiProvider } from '../../providers/api.prov'

@Component({
  selector: 'app-registrarse',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule, NavComponent],
  templateUrl: './registrarse.component.html',
  styleUrl: './registrarse.component.css'
})
export class RegistrarseComponent {
  constructor(
    private apiProv: ApiProvider
  ) {
    
  }
  email: string = ''; 
  password: string = ''; 
  username:string='';

  public register(){
    const data = {
      email: this.email,
      password: this.password,
      username: this.username
    }

    this.apiProv.register(data).then(res => {
      console.log(res);
      window.location.href = '/login';
    });
  }

}
