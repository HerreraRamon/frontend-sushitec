import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule,Validators } from '@angular/forms';
import { NavComponent } from '../../shared/nav/nav.component';

@Component({
  selector: 'app-registrarse',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule, NavComponent],
  templateUrl: './registrarse.component.html',
  styleUrl: './registrarse.component.css'
})
export class RegistrarseComponent {
  userForm :FormGroup

  constructor(private fb:FormBuilder){
    this.userForm=this.fb.group({
      nombre: new FormControl('',[Validators.required])
    })
  }
  usuario: string = ''; 
  contrasena: string = ''; 
  nombre:string='';

}
