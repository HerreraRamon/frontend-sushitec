import { Component } from '@angular/core';
import { Nav2Component } from '../../shared/nav2/nav2.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [Nav2Component],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
